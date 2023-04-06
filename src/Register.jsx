import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
          <button className="login-reg-btn" type="submit">
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
