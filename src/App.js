import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Axios from 'axios';
import { Claim } from "./pages/new-claim";
import Stack from '@mui/material/Stack';

import SideNav from "./components/sidenav";

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
      <Stack direction="row" spacing={2} id="app-container">
        <SideNav name="Brandon Alexander" notifications="3"/>
        <Claim/>
      </Stack>
  );
}

export default App;

//TODO: For now the homepage is the login form.
//TODO: The login/register button doesnt really do anything
