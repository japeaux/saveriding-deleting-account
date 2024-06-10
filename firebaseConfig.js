// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPSSuLbHj3nUoOC4p_V6xnVkcGrfptpOA",
  authDomain: "savebiking-e3323.firebaseapp.com",
  projectId: "savebiking-e3323",
  storageBucket: "savebiking-e3323.appspot.com",
  messagingSenderId: "38272340977",
  appId: "1:38272340977:web:b864f9509aed4ae0682a50",
  measurementId: "G-709NYR5ZHY"
};

// Initialize Firebase
//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}