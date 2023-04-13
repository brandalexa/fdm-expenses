import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClaims } from "../../firebase";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ViewUnsentClaims = (props) => {

    // List of claim objects where Sent != true;
    const [unsentClaims, setUnsentClaims] = useState([]);

    function updateClaims() {
      const claims = getClaims();
      claims.filter((claim) => {
        return claim[Object.keys(claim)[0]].Sent === false;
      });
      console.log(claims);
      setUnsentClaims(claims);
    }
  
    useEffect(() => {
      updateClaims();
    }, []);

  const claims = unsentClaims;

  const handleClick = (title) => {
    alert(title); // Will link to relevant claim
  };

  return (
    <TableContainer component={Paper}>
        <h1>Unsent Claims</h1>
      <Table sx={{ minWidth: 650 }} aria-label="Claims table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
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
                {claim.Title}
              </TableCell>
              <TableCell>{claim.Description}</TableCell>
              <TableCell>{claim.Amount}</TableCell>
              <TableCell>{claim.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewUnsentClaims;
