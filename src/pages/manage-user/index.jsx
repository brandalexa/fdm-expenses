import React, {useState} from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import Button from '@mui/material/Button';
import { isVisible } from "@testing-library/user-event/dist/utils";


const ViewUnsentClaims = () => {
  const claims = [ // Boilerplate - will be replaced with JSON from DB
    { title: "Brandon Alexander", description: "brandonalexander@fdm.com", role: "admin"},
    { title: "Lavanya Stuti", description: "lavanyastuti@fdm.com", role: "manager"},
    { title: "Jonathan Dennis", description: "jondennis@fdm.com", role: "employee"},
  ];

   const [isVisible, setIsVisible] = useState(false);

  const handleClick = (title) => {
    setIsVisible(true);
  };

  return (
    <>
    <TableContainer component={Paper}>
        <h1>Users</h1>
      <Table sx={{ minWidth: 650 }} aria-label="Claims table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.map((claim) => (
            <TableRow
              key={claim.title}
              onClick={() => handleClick(claim.title)}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <TableCell component="th" scope="row">
                {claim.title}
              </TableCell>
              <TableCell>{claim.description}</TableCell>
              <TableCell>{claim.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  <div className="form-container">
  <h1>Manage User</h1>
  {isVisible && (
  <form>

    <label for="title">Name</label>
    <input type="text" id="title" name="title"  value="Jonathan Dennis"/>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" value="jondennis@fdm.com" />

    <label for="role">Role</label>
    <input type="text" id="role" name="role" value="employee" />

    <div id="form-buttons">
      <Button variant="contained" color="success" type="submit" className="form-button">Submit</Button>
      <Button variant="contained" color="error" className="form-button">Discard</Button>
    </div>
  </form>
  )
}
  </div>
  </>
  );
};

export default ViewUnsentClaims;