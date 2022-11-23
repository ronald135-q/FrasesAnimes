import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCRT6TIxdAErhShhaEr7KPVMJfV-3fU-L0",
  authDomain: "frasesanime.firebaseapp.com",
  projectId: "frasesanime",
  storageBucket: "frasesanime.appspot.com",
  messagingSenderId: "345282892185",
  appId: "1:345282892185:web:e2607a157bced5f8e24308",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
