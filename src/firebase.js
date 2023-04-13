// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getStorage,
  ref as sRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
  push,
  onValue,
} from "firebase/database";
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

const storage = getStorage();
export const storageRef = sRef(storage, "evidence");

const db = getDatabase();

// Get a reference to the "Claim" folder in your Firebase Realtime Database
export const claimRef = ref(db, "claims");

// Get a reference to the "User" folder in your Firebase Realtime Database
const userRef = ref(db, "user");

export const auth = getAuth(app);

// Returns a list of claims made by the user logged in
export const getClaims = async () => {
  if (!auth.currentUser) return [];  // Not logged in
  const uid = auth.currentUser.uid;
  const claims = [];

  await get(claimRef).then((snapshot) => {
    if (snapshot.exists()) {
      const snap = snapshot.val();
      for (let key in snap) {
          if (snap[key].User === uid) {  // SHOULD BE === (!== USED TO TEST)
            let obj = {};
            obj[key] = snap[key];
            claims.push(obj);
          }
      }
      
    } else {
        console.log("No data available");
    }
  }).catch((error) => {
      console.error(error);
  });
  return claims;
}

// Returns a list of claims made by everyone EXCEPT the user (role=manager) logged in
export const getEmployeeClaims = async () => {
  if (!auth.currentUser) return [];  // Not logged in

  const uid = auth.currentUser.uid;
  const claims = [];

  await get(claimRef).then((snapshot) => {
    if (snapshot.exists()) {
        const snap = snapshot.val();
        for (let key in snap) {
            if (snap[key].User !== uid) {  // SHOULD BE !== (gets all claims EXCEPT the manager that is logged in)
              let obj = {};
              obj[key] = snap[key];
              claims.push(obj);
            }
        }
    } else {
        console.log("No data available");
    }
  }).catch((error) => {
      console.error(error);
  });

  return claims;
}

export default app;