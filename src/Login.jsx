import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="auth-form-container">
        <h2 className="h2-logreg">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button className="login-reg-btn" type="submit">
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
