// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_CHAVE,
  authDomain: process.env.NEXT_PUBLIC_AUDO,
  projectId: process.env.NEXT_PUBLIC_PD,
  storageBucket: process.env.NEXT_PUBLIC_BALDE,
  messagingSenderId: process.env.NEXT_PUBLIC_MSN,
  appId: process.env.NEXT_PUBLIC_AI,
};



// Initialize Firebase
//const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}

