import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import reportWebVitals from './reportWebVitals';
//  import * as firebase from 'firebase';
//  import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 const firebaseConfig = {
   apiKey: "AIzaSyCKZ1J9QFoKdU6P69e0r39u2QVOJz5r7No",
   authDomain: "cart-f70d5.firebaseapp.com",
   projectId: "cart-f70d5",
   storageBucket: "cart-f70d5.appspot.com",
   messagingSenderId: "55969806972",
   appId: "1:55969806972:web:515f33722a68644abc27f9"
 };

// // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
