// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3VXXoMrispn2T6Urxhv4i2wpSzR5hlyI",
  authDomain: "amajon-final.firebaseapp.com",
  projectId: "amajon-final",
  storageBucket: "amajon-final.appspot.com",
  messagingSenderId: "821767467736",
  appId: "1:821767467736:web:298db508fe3f418b725dad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
