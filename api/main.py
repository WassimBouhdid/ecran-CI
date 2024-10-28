from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from shutil import copyfile

UPLOAD_FOLDER = 'db/resources/uploaded_files'
CURRENT_DISPLAYED_IMG_FOLDER = 'static/current_displayed_img'
MAX_CONTENT_LENGTH = 512 * 1024 * 1024  # 512 MB
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'mp4'}

# Create a Flask application instance
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['CURRENT_DISPLAYED_IMG_FOLDER'] = CURRENT_DISPLAYED_IMG_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH

CORS(app)

def is_allowed_file(filename):
    return '.' in filename and \
           get_file_extension(filename) in ALLOWED_EXTENSIONS

def get_file_extension(filename):
    return filename.rsplit('.', 1)[1].lower()

def copy_file_to_displayed_folder(filename):
    # Copy the file to the current displayed image folder
    try :
        copyfile(os.path.join(app.config['UPLOAD_FOLDER'], filename), os.path.join(app.config['CURRENT_DISPLAYED_IMG_FOLDER'], "image."+get_file_extension(filename)))
    except:
        print("Error copying file to current displayed image folder")
    try:
        #remove all files in the folder except the last one
        files = os.listdir(app.config['CURRENT_DISPLAYED_IMG_FOLDER'])
        for file in files:
            if file != "image."+get_file_extension(filename):
                os.remove(os.path.join(app.config['CURRENT_DISPLAYED_IMG_FOLDER'], file))
    except:
        print("Error removing files from current displayed image folder")

def log_feedback(data):
    with open("db/resources/feedback.txt", "a") as file:
        file.write(data['feedback'] + "\n")
        file.close()       
     
# Define a simple route
@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flask API!"

@app.route('/home_screen', methods=['GET'])
def get_home_screen():
    #get filename in the current displayed image folder
    files = os.listdir(app.config['CURRENT_DISPLAYED_IMG_FOLDER'])
    return render_template('display_screen/display.html')

# Define a route for getting some data
@app.route('/api/data', methods=['GET'])
def get_data():
    # Sample data to be returned as JSON
    data = {
        'message': 'Hello, World!',
        'status': 'success'
    }
    return jsonify(data)

# Define a route for posting some data
@app.route('/api/data', methods=['POST'])
def post_data():
    # Get the JSON data from the request
    data = request.get_json()
    # Return a response
    return jsonify({
        'received_data': data,
        'status': 'success'
    })

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {'message': 'No file part'}, 400
    
    # Get the file from the request
    file = request.files['file']

    if file.filename == '':
        return {'message': 'No selected file'}, 400
    
    # Save the file
    if file and is_allowed_file(file.filename):
            filename = secure_filename(file.filename) # prevent targeting external directories
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            copy_file_to_displayed_folder(filename)
            print("File uploaded successfully")
            # Return a response
            return jsonify({
                'message': 'File uploaded successfully',
                'status': 'success'
            })
    else:
        return jsonify({
            'message': 'Unknown error or file not allowed',
            'status': 'error'
        })


@app.route('/api/feedback', methods=['POST'])    
def post_feedback():
    data = {'feedback': request.data.decode('utf-8')}
    print(data)
    log_feedback(data)
    return jsonify({
        'received_data': data,
        'status': 'success'
    })
    

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
