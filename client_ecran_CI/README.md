# 🖥️ Page web pour envoyer des images sur l'écran du CI 🖥️

This directory contains the React app for the website that allows anyone to send an image to display on the monitor located in the CI. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Modern and beautiful color design by @F2Ville. 

### Prepare the files
As the raspi usually have a static IP address, insert this IP address in the start of file `src/App.js` for variable `API_IP_ADDRESS`.
```javascript
    const API_IP_ADDRESS = "192.168.1.124"
```
Adapt the port if needed (per default : `5000`)
### Install the dependencies:
   ```bash
   npm install
   ```

### Run the app

In the project directory, you can run:
 ```bash
   npm start
   ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

 ```bash
   npm test
   ```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 ```bash
   npm run build
   ```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. *But why would anyone need production ?*
