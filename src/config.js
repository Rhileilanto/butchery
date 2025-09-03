// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMcKxN990OgWEVDwJcd0JJUP9VAbsa5LM",
  authDomain: "butchery-647b1.firebaseapp.com",
  projectId: "butchery-647b1",
  storageBucket: "butchery-647b1.firebasestorage.app",
  messagingSenderId: "521122468515",
  appId: "1:521122468515:web:f105937df4200ded40e516",
  measurementId: "G-VZMQ3MLCX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);