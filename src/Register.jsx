import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(name, email, pass);
      await createUserWithEmailAndPassword(auth, email, pass, name)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/Login", { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!name.match(/^[a-zA-Z ]*$/)) {
      errors.name = "Your name must not contain numbers or special characters";
    }
    if (!email) {
      errors.email = "E-mail is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "E-mail is invalid";
    }
    if (!pass) {
      errors.pass = "Password is required";
    } else if (pass.length < 6) {
      errors.pass = "Password must be at least 6 characters";
    }
    return errors;
  };

  return (
    <>
      <div className="auth-form-container">
        <h2 className="h2-logreg">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="label-logreg" htmlFor="name">
            Full Name
          </label>
          <input
            className="input-logreg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
          {formErrors.name && (
            <span className="form-error">{formErrors.name}</span>
          )}

          <label className="label-logreg" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-logreg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          {formErrors.email && (
            <span className="form-error">{formErrors.email}</span>
          )}

          <label className="label-logreg" htmlFor="password">
            Password
          </label>
          <input
            className="input-logreg"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          />
          {formErrors.pass && (
            <span className="form-error">{formErrors.pass}</span>
          )}

          <button
            className="login-reg-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Log In Here!
        </button>
      </div>
    </>
  );
};
