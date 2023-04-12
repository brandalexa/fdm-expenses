import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/change-password/ResetPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
