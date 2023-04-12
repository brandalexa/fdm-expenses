import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ViewUnsentClaims = () => {
  const claims = [ // Boilerplate - will be replaced with JSON from DB

  ];



  return (
    <TableContainer component={Paper}>
        <h1>History Claim</h1>
      <Table sx={{ minWidth: 650 }} aria-label="Claims table">
        <TableHead>
          <h1>Bingfan </h1> 
          <div>Nationality:Chinese</div>
          <div>Adress: Via Appia 234</div>
          <div>Telephone number:+44 7570834572</div>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewUnsentClaims;