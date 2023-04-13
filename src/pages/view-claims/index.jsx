import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClaims } from "../../firebase";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ViewUnsentClaims = (props) => {

    // List of claim objects where Sent != true;
    const [unsentClaims, setUnsentClaims] = useState([]);

    async function updateClaims() {
      const claims = await getClaims();
      console.log(claims);
      //console.log(Object.keys(claims[0]));
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
        <h1>My Claims</h1>
      <Table sx={{ minWidth: 650 }} aria-label="Claims table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {claims.map((claim) => (
            <TableRow
              key={Object.keys(claim)[0]}
              onClick={() => handleClick(claim[Object.keys(claim)[0]].Title)}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <TableCell component="th" scope="row">
                {claim[Object.keys(claim)[0]].Title}
              </TableCell>
              <TableCell>{claim[Object.keys(claim)[0]].Description}</TableCell>
              <TableCell>{"£" + claim[Object.keys(claim)[0]].Amount}</TableCell>
              <TableCell>{claim[Object.keys(claim)[0]].Date}</TableCell>
              <TableCell>{claim[Object.keys(claim)[0]].Sent === true ? "Submitted" : "Draft"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewUnsentClaims;
