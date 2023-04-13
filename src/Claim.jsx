import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { storageRef, claimRef } from "./firebase";
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

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;

var userDisplay;
var userDisplay2;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  userDisplay = auth.currentUser.uid;
  userDisplay2 = auth.currentUser.email;
} else {
  // No user is signed in.
}



export const Claim = (props) => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [expenseData, setExpenseData] = useState({
    title: '',
    description: '',
    amount: '',
    date: '',}
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseData.title);

    console.log("Submitting");
    console.log(auth.currentUser.email);
    console.log(auth.currentUser.uid);

    // Merge expense data with file data
    const expense = {
      ...expenseData,
      evidence: file,
    };

    // // Save the expense as a JSON file
    // const jsonExpense = JSON.stringify(expense);
    // const fileUrl = URL.createObjectURL(new Blob([jsonExpense], { type: 'application/json' }));
    // const link = document.createElement('a');
    // link.href = fileUrl;
    // link.download = `${expense.title}.json`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    //Firebase Sent Claim
    const input = document.querySelector("input");
    const reciept = expense.file;

    console.log("Image File = " + input.files[0].name);

    const fileName = auth.currentUser.uid +'/'+input.files[0].name;
    //const fileName = Math.random().toString(36).substring(2) + Date.now().toString() + '.' + input.files[0].name.split('.').pop()
    // const metadata = {
    //   contentType: reciept.type
    // };
    const imageRef = sRef(storageRef, fileName);

    uploadBytes(imageRef, reciept)
      .then(() => {
        console.log("Image uploaded successfully!");
        return getDownloadURL(imageRef);
      })
      .then((url) => {
        console.log("Getting Image URL");
        console.log("Image URL: ", url);
        console.log(expense.title);
        // Store the URL in your Realtime Database or Firestore document
        //Do FireBase Database here...
        const newDataRef = push(claimRef, {
          // Title: title.value,

        });

        set(newDataRef, {
          Description: expenseData.description,
          Amount: expenseData.amount,
          Date: expenseData.date,
          Evidence: url,
          Draft: false,
          Sent: true,
          Approved: false,
          Resolved: false,
          Title: expenseData.title,
          User: auth.currentUser.uid,
        }).then(() => {
          console.log("Submit Claim");
          //Redirect to different page
          
        }).catch((error) => {
          console.error("Error adding new user: ", error);
        });
      })
      .catch((error) => {
        console.error("Error getting image URL: ", error);
      });
  };


  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setExpenseData(prevExpenseData => ({
      ...prevExpenseData,
      [name]: value,
    }));
  }

  function saveDraft()
  {
    console.log("Saving Draft");
    //Firebase draft claim
    var description = expenseData.description;

    const input = document.querySelector("input");
    const reciept = input.files[0];

    const fileName = auth.currentUser.uid +'/'+Math.random().toString(36).substring(2)+'/'+input.files[0].name;
    // const metadata = {
    //   contentType: reciept.type
    // };
    const imageRef = sRef(storageRef, fileName);

    uploadBytes(imageRef, reciept)
      .then(() => {
        console.log("Image uploaded successfully!");
        return getDownloadURL(imageRef);
      })
      .then((url) => {
        console.log("Getting Image URL");
        console.log("Image URL: ", url);
        console.log(description.value);
        // Store the URL in your Realtime Database or Firestore document
        //Do FireBase Database here...
        const newDataRef = push(claimRef, {
          // Title: title.value,

        });

        set(newDataRef, {
          Description: expenseData.description,
          Amount: expenseData.amount,
          Date: expenseData.date,
          Evidence: url,
          Draft: true,
          Sent: false,
          Approved: false,
          Resolved: false,
          Title: expenseData.title,
          User: auth.currentUser.uid,
        }).then(() => {
          console.log("Save Draft");
          //Redirect to different page
          
        }).catch((error) => {
          console.error("Error adding new user: ", error);
        });
      })
      .catch((error) => {
        console.error("Error getting image URL: ", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      
      <p>{userDisplay}</p>
      <p>{userDisplay2}</p>
      <label>Title</label>
      <input type="text" id="title" name="title" value={expenseData.title} onChange={handleInputChange} />

      <label>Description</label>
      <input type="text" id="description" name="description" value={expenseData.description} onChange={handleInputChange} />

      <label>Amount</label>
      <input type="number" id="amount" name="amount" value={expenseData.amount} onChange={handleInputChange} />

      <label>Date</label>
      <input type="date" id="date" name="date" value={expenseData.date} onChange={handleInputChange} />

      <button type="submit">Save Expense</button>
      <button type="button" onClick={saveDraft}>Save Draft</button>
      
    </form>
    
  );
}



//export default Claim;
