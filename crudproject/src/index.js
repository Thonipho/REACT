import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAmEkDH4enWAR538JFo_eK1XijYwbAfZGQ",
  authDomain: "crudproject-b43f2.firebaseapp.com",
  projectId: "crudproject-b43f2",
  storageBucket: "crudproject-b43f2.appspot.com",
  messagingSenderId: "374706316617",
  appId: "1:374706316617:web:65fe2a00e30b4d3b176698",
  measurementId: "G-VLY565J8HV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
