// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCulZjU82E09q3vmBKMaaRodciYC4fF8sA",
  authDomain: "static-pages-98904.firebaseapp.com",
  projectId: "static-pages-98904",
  storageBucket: "static-pages-98904.appspot.com",
  messagingSenderId: "270957878041",
  appId: "1:270957878041:web:5d39aeda91aa37efb28388",
  measurementId: "G-YS2LD1QVQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);