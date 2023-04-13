import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Axios from 'axios';
import Stack from '@mui/material/Stack';

import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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


function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post('http://localhost3001/register',
    {name: nameReg, email: emailReg, password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Routes>
        <Route path="/" element={<SideNav/>}/>
        <Route index element={<Login/>}/>
        <Route path="notifications" 
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <Notifications/>
            </Stack>
          }
        />
        <Route path="my-details"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <MyDetails/>
            </Stack>
          }
        />
        {/* <Route path="change-password"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <ChangePassword/>
            </Stack>
          }
        /> */}
        <Route path="view-claim"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <ViewUnsentClaims/>
            </Stack>
          }
        />
        <Route path="new-claim" 
          element={
            <Stack direction="row" spacing={2} id="app-container">
              <SideNav name="Brandon Alexander" notifications="4"/>
              <Claim/>
            </Stack>
          }
        />
        <Route path="manage-pending-claims"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <ManageClaims/>
            </Stack>
          }
        />
        <Route path="view-closed-claims"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <ViewClosedClaims/>
            </Stack>
          }
        />
        <Route path="new-user"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <NewUser/>
            </Stack>
          }
        />
        <Route path="manage-user"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <ManageUser/>
            </Stack>
          }
        />
        <Route path="*"
          element={            
            <Stack direction="row" spacing={2} id="app-container">
                <SideNav name="Brandon Alexander" notifications="4"/>
                <Notifications/>
                {/* Create 404 page */}
            </Stack>
          }
        />
    </Routes>

  );
}

export default App;

//TODO: For now the homepage is the login form.
//TODO: The login/register button doesnt really do anything
