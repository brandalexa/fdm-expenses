import React, { useState } from "react";
import "./App.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(email, pass);
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
        <h2 className="h2-logreg">Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label-logreg" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-logreg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          {formErrors.email && (
            <span className="form-error">{formErrors.email}</span>
          )}

          <label htmlFor="password">Password</label>
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

          <button className="login-reg-btn" type="submit">
            Log In
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
