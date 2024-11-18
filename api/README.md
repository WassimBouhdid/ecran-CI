## API
Flask API to receive new images, files and plain text to display on the screen in the CI. 

`v.0.01`

#### Temporary readme

1. **Install dependencies**
2. **Create required folders**
3. **Run** `$python3 main.py`

#### Installation

1. **Create a Virtual Environment**:
   Navigate to your project folder, then create and activate a virtual environment. Run:

   ```bash
   python -m venv venv
   ```

2. **Activate the Virtual Environment**:
   - On Linux/macOS:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```

3. **Install Packages from `requirements.txt`**:
   With the virtual environment activated, install the packages:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run Your Project in the Virtual Environment**:
   Any time you work on this project, activate the virtual environment first (`source venv/bin/activate`), and your packages will be isolated within it.

5. **Deactivate When Done**:
   To exit the virtual environment, simply run:

   ```bash
   deactivate
   ```


### Create required folder
Run the app (see next step). In case of error `File or directory not found`, create the required folder with `mkdir`.
```bash
    mkdir -p db/resources/uploaded_files
    mkdir -p static/current_displayed_img
```
### Run the API
   ```bash
   python3 main.py
   ```