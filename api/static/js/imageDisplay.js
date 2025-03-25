 // Constant image path without specifying the extension
 const folderPath = 'static/current_displayed_img/'; // Path to the folder containing the image

 // List of common image file extensions
 const extensions = ['png', 'jpg', 'jpeg', 'gif'];

 // Function to try loading the image
 function tryLoadImage() {
    //  if (index >= extensions.length) {
    //      document.getElementById('uniqueImage').alt = 'Image not found';
    //      return;
    //  }

    let srcString

     fetch('http://127.0.0.1:5000/random_img')
    .then(response => response.json())
    .then(data => {
        console.log(data["imageName"])
        console.log(typeof data["imageName"])
        srcString = "/static/uploaded_files/"+data["imageName"]
    })
    .catch(error => {
        console.error('Error:', error)
    });

    
    
    const imgElement = document.getElementById('uniqueImage');

     // Attempt to load the image
     imgElement.src = srcString;
 }

 // Start the process
 tryLoadImage();

 setTimeout(function(){
 location.reload();
 }, 100000);