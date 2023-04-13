import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { storageRef, claimRef } from "../../firebase";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "firebase/storage";

import style from "./style.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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
    <div className="form-container">
      <h1>New Claim</h1>
      <form onSubmit={handleSubmit}>

        <label for="title">Title</label>
        <input type="text" id="title" name="title" value={expenseData.title} onChange={handleInputChange} />

        <label for="description">Description</label>
        <input className="text-area" type="text" id="description" name="description" value={expenseData.description} onChange={handleInputChange} />
        <div id="amount-date">
          <div className="amount-date-field">
            <label for="amount">Amount</label>
            <input type="number" id="amount" name="amount" step="0.01" value={expenseData.amount} onChange={handleInputChange} />
          </div>
          <div className="amount-date-field" id="date">
            <label for="date">Date</label>
            <input type="date" id="date" name="date" value={expenseData.date} onChange={handleInputChange} />
          </div>
        </div>
        <label for="file">Upload Evidence</label>
        <Stack className="stack" direction="row" alignItems="center" spacing={2}>
          <Button className="form-button" variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={handleFileChange}/>
          </Button>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera/>
          </IconButton>
        </Stack>
        <div id="form-buttons">
          <Button variant="contained" color="success" type="submit" className="form-button">Submit</Button>
          <Button variant="contained" className="form-button" onClick={saveDraft}>Save</Button>
          <Button variant="contained" color="error" className="form-button">Discard</Button>
        </div>
      </form>
    </div>
  );
}

export default Claim;
