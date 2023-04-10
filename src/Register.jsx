import React, { useState } from "react";
import "./App.css";


export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8080/register.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: email, password: pass }),
        });

        if (!response.ok) {
          throw new Error('Registration failed');
        }

        const result = await response.json();

        if (result.success) {
          console.log('Registration successful');
        } else if (result.error) {
          console.error(result.error);
        }
      } catch (err) {
        console.error(err.message);
      }
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
