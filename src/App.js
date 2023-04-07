import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import Axios from 'axios';

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
    <><div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div><button onClick={register}> Register </button></>
  );
}

export default App;

//TODO: For now the homepage is the login form.
//TODO: The login/register button doesnt really do anything
