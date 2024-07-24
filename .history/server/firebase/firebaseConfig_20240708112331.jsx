// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyD4YaMSpen45xYm9FXCIWIlG0EieAyQzDQ",
  authDomain: "folakits-1b848.firebaseapp.com",
  projectId: "folakits-1b848",
  storageBucket: "folakits-1b848.appspot.com",
  messagingSenderId: "324033148896",
  appId: "1:324033148896:web:f30c1aa9fb85674c9e1d85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
