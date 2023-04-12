// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkujsEM7HanvsNHX54o6NGW-nMwWQrR4U",
  authDomain: "fdm-expenses-b2740.firebaseapp.com",
  databaseURL:
    "https://fdm-expenses-b2740-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fdm-expenses-b2740",
  storageBucket: "fdm-expenses-b2740.appspot.com",
  messagingSenderId: "930554659258",
  appId: "1:930554659258:web:2e0b11df7fc8a0b09d9d83",
  measurementId: "G-T82WVQKNDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
