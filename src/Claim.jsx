import React, { useState } from "react";

export const Claim = (props) => {
  const [file, setFile] = useState("");
  const [expenseData, setExpenseData] = useState({
    title: '',
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
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      
      <label for="title">Title</label>
      <input type="text" id="title" name="title" value={expenseData.title} onChange={handleInputChange} />

      <label for="title">Amount</label>
      <input type="number" id="amount" name="amount" value={expenseData.amount} onChange={handleInputChange} />

      <label for="title">Date</label>
      <input type="date" id="date" name="date" value={expenseData.date} onChange={handleInputChange} />

      <button type="submit">Save Expense</button>
    </form>
  );
}

export default Claim;
