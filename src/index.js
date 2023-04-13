import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import Home from "./Home";
import { Register } from "./Register";
import { Claim } from "./Claim";
import { SentClaims } from "./SentClaims";
import { UnsentClaims } from "./UnsentClaims";
import { ManageClaims } from "./ManageClaims";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="claim" element={<Claim />} />
        <Route path="unsent" element={<UnsentClaims />} />
        <Route path="sent" element={<SentClaims />} />
        <Route path="manage" element={<ManageClaims />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

//reportWebVitals(console.log);
