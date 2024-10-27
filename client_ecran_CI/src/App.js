import logo from './LogoCI.png';
import './App.css';
import React, { useState, useRef } from "react";

const PORT = 5000;
const API_IP_ADDRESS = "192.168.1.60"
const serverURL = `http://${API_IP_ADDRESS}:${PORT}`;
function App() {
  const [fileName, setFileName] = useState("");
  const [imageURL, setImageURL] = useState(""); // State to store the image URL
  const [isFileSelected, setIsFileSelected] = useState(false); // State to track file selection
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      setFileName(file.name);
      setIsFileSelected(true); 
      setSelectedFile(file); // Store the selected file

      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageURL(e.target.result); // Set the image URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL

    }
  };


  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
    if (true) { //TODO check that a file is selected
      document.getElementsByClassName("send-button")[0].disabled = false;
      document.getElementsByClassName("send-button")[0].style.backgroundColor = "black";
    }
  };

  const handleSendButtonClick = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${serverURL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
      } else {
        alert('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  const sendFeedback = async () => {
    const feedback = document.getElementsByClassName("input-field")[0].value;
    if (feedback === "") {
      alert("Veuillez entrer un feedback ou une anecdote marrante")
      return;
    }
    
    const response = await fetch(`${serverURL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: feedback,
    });
    if (response.ok) {
      alert('Feedback envoyé avec succès!');
    } else {
      alert('Echec de l\'envoi du feedback.');
    }
    
    };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Page-title">Gateway to CI's CrIne 🚀</h1>
        <img src={logo} className="App-logo" alt="logo CI"  />
        <input
                type="file"
                accept="image/*, .mp4"
                style={{ display: "none" }}
                id="contained-button-file"
                onChange={handleFileChange}
                ref={fileInputRef}
            />
        <button class="upload-button" onClick={handleUploadButtonClick}>
            Upload une photo
        </button>

        <button 
          className={`send-button ${isFileSelected ? 'enabled' : ''}`}
          id="sendToServer-button" 
          disabled={!isFileSelected} 
          onClick={handleSendButtonClick}
          method="post" action={`${serverURL}/api/upload`}>
            Envoyer la photo
        </button>
        
        {fileName && (
                <div style={{ marginTop: 20, fontSize:"16px" }}>
                    <p>Selected File: <code>{fileName}</code></p>
                </div>
            )}

        {imageURL && ( //display the image once selected
          <div>
            <img src={imageURL} alt="The img that was selected" style={{ maxWidth: "50%", height: "auto"}}/>
          </div>
        )}

        <div style={{marginTop:30}} className="one-line">
          <input type="text" placeholder="Donne du feedback ou raconte une anecdote marrante" class="input-field"/>
          <button class="normal-button" onClick={sendFeedback}>Envoyer</button>
        </div>
        <a className="rickroll-link" href="https://youtu.be/dQw4w9WgXcQ?si=2xjRwrsmoOTJeL76" target="_blank" rel="noopener noreferrer">Video de Bapteme CI 2024</a>
      </header>
    </div>
  );
}

export default App;
