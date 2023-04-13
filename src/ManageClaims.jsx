import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getEmployeeClaims } from "./firebase";


export const UnsentClaims = (props) => {
  const navigate = useNavigate();

  // List of claim objects where Sent != true;
  const [employeeClaims, setEmployeeClaims] = useState([]);

  function updateClaims() {
    const claims = getEmployeeClaims();
    // Ensures that all claims to be managed have been submitted and not yet resolved
    claims.filter((claim) => {
        return claim[Object.keys(claim)[0]].Sent === true && claim.Resolved === false;
      });
    console.log(claims);
    setEmployeeClaims(claims);
  }

  // Approves/Rejects a claim and resolves it
  function approveClaim(claimID, isApproved) {

  }

  useEffect(() => {
    updateClaims();
  }, []);

  return (
    <div>
        <button onClick={updateClaims}>Test</button>
    </div>
    
  );
}

