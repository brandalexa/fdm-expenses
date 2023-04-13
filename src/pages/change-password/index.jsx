import React, { useState } from "react";
import { sendPasswordResetEmail, getAuth } from "@firebase/auth";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };
  return (
    <div className="resetPassword-main">
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
      <button className="resetBtn" type="button" onClick={triggerResetEmail}>
        Reset password
      </button>
    </div>
  );
}
export default ChangePassword;
