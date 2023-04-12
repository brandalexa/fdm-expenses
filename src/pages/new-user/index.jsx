import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

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
    <TableContainer component={Paper}>
        <h1>Unsent Claims</h1>
      <Table sx={{ minWidth: 650 }} aria-label="Claims table">
        <TableHead>
          <TableRow>
            <TableCell>User number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Total amount request</TableCell>
            <TableCell>Joined Date</TableCell>
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
              <TableCell>{claim.amount}</TableCell>
              <TableCell>{claim.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewUnsentClaims;