// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTY2HzHDFSwpQ5_jL58poZkUvQU14zXTI",
  authDomain: "johndevoflagos.firebaseapp.com",
  projectId: "johndevoflagos",
  storageBucket: "johndevoflagos.appspot.com",
  messagingSenderId: "1092406010478",
  appId: "1:1092406010478:web:9b59a088c22c44c9a0fc7f",
  measurementId: "G-DMPQ2K44QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);