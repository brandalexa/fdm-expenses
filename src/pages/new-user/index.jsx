import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import style from "./style.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const ViewUnsentClaims = () => {
  const claims = [ // Boilerplate - will be replaced with JSON from DB
    { title: "User 1", description: "Joe Max", amount: "£420", date: "2015-07-01" },
    { title: "User 2", description: "Bingfan Xu", amount: "£500", date: "2015-02-03" },
    { title: "User 3", description: "Hex Lenin", amount: "£3000", date: "2015-05-07" },
  ];

  const handleClick = (title) => {
    alert(title); // Will link to relevant claim
  };

  return (
    <div className="form-container">
      <h1>New User</h1>
      <form>

        <label for="title">Name</label>
        <input type="text" id="title" name="title"  />

        <label for="email">Email</label>
        <input type="text" id="email" name="email"  />

        <label for="role">Role</label>
        <input type="text" id="role" name="role" value="employee" />

        <div id="form-buttons">
          <Button variant="contained" color="success" type="submit" className="form-button">Submit</Button>
          <Button variant="contained" color="error" className="form-button">Discard</Button>
        </div>
      </form>
    </div>
  );
};

export default ViewUnsentClaims;