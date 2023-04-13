import React from "react";
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ViewUnsentClaims = () => {
  const claims = [ // Boilerplate - will be replaced with JSON from DB

  ];



  return (
    <div className="form-container">
      <h1>My Details</h1>
      <form>

        <label for="title">Name</label>
        <input type="text" id="title" name="title" value="Jon Dennis" />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" value="jondennis@fdm.com" />

        <label for="role">Role</label>
        <input type="text" id="role" name="role" value="employee" />

        <div id="form-buttons">
          <Button variant="contained" color="success" type="submit" className="form-button">Change</Button>
        </div>
      </form>
    </div>
  );
};

export default ViewUnsentClaims;