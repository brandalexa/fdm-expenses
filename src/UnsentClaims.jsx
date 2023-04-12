import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClaims } from "./firebase";


export const UnsentClaims = (props) => {
  const navigate = useNavigate();

  // List of claim objects where Sent != true;
  const [unsentClaims, setUnsentClaims] = useState([]);

  function updateClaims() {
    const claims = getClaims();
    claims.filter((claim) => {
      return claim.Sent === false;
    });
    console.log(claims);
    setUnsentClaims(claims);
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

