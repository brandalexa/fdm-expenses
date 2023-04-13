import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClaims } from "./firebase";


export const SentClaims = (props) => {
  const navigate = useNavigate();

  // List of claim objects where Sent == true;
  const [sentClaims, setSentClaims] = useState([]);

  function updateClaims() {
    const claims = getClaims();
    claims.filter((claim) => {
      return claim[Object.keys(claim)[0]].Sent === true;
    });
    console.log(claims);
    setSentClaims(claims);
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

