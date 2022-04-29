import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFRW0NagOQhpLExul5JdUx6FZenTgr2zs",
  authDomain: "e-music-max.firebaseapp.com",
  projectId: "e-music-max",
  storageBucket: "e-music-max.appspot.com",
  messagingSenderId: "911231788150",
  appId: "1:911231788150:web:5208cf44f39a09d74cab57"
};

initializeApp(firebaseConfig);

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
