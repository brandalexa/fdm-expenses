import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProSidebarProvider } from "react-pro-sidebar";

import ViewUnsentClaims from "./pages/view-claims";
import SideNav from "./components/sidenav";
import Notifications from "./pages/notifications";
import MyDetails from "./pages/my-details";
import ChangePassword from "./pages/change-password";
import Claim from "./pages/new-claim";
import ManageClaims from "./pages/manage-pending-claims";
import ViewClosedClaims from "./pages/view-closed-claims";
import NewUser from "./pages/new-user";
import ManageUser from "./pages/manage-user";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <ProSidebarProvider>
      <App name="Brandon Alexander" notifications="4"/>
    </ProSidebarProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();