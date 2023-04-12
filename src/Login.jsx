import React, { useState } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(email, pass);
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Home", { replace: true });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      //navigate("/Home", { replace: true });
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
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
        <h2 className="h2-logreg">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label-logreg" htmlFor="email-address">
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
            Login
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register Here!
        </button>
      </div>
    </>
  );
};
