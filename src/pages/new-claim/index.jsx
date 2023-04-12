import React, { useState } from "react";
import style from "./style.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export const Claim = (props) => {
  const [file, setFile] = useState("");
  const [expenseData, setExpenseData] = useState({
    title: '',
    description: '',
    amount: '',
    date: '',});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseData.title);

    // Merge expense data with file data
    const expense = {
      ...expenseData,
      evidence: file,
    };

    // Save the expense as a JSON file
    const jsonExpense = JSON.stringify(expense);
    const fileUrl = URL.createObjectURL(new Blob([jsonExpense], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${expense.title}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  return (
    <div className="form-container">
      <h1>New Claim</h1>
      <form onSubmit={handleSubmit}>

        <label for="title">Title</label>
        <input type="text" id="title" name="title" value={expenseData.title} onChange={handleInputChange} />

        <label for="desc">Description</label>
        <input className="text-area" type="text" id="desc" name="desc" value={expenseData.description} onChange={handleInputChange} />
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
          <Button variant="contained" className="form-button">Save</Button>
          <Button variant="contained" color="error" className="form-button">Discard</Button>
        </div>
      </form>
    </div>
  );
}

export default Claim;
