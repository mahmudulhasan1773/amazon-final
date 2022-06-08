import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };
  const handlePassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };
  const handleConfirdPassword = (e) => {
    const userPasswordConfirmd = e.target.value;
    setConfirmPassword(userPasswordConfirmd);
  };
  const handleCreateuser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("password not matched");
      return;
    }
    console.log("v");
  };
  return (
    <div className="signUp">
      sign up.
      <form onSubmit={handleCreateuser}>
        <div className="input-group">
          <label>Email</label>
          <input
            onBlur={handleEmail}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            name="email"
            id="password"
            required
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            onBlur={handleConfirdPassword}
            type="password"
            name="password"
            id="confirdPassword"
            required
          />
          <p className="text-danger">{error}</p>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
      <div>
        Allready registered? please <Link to="/login">Login.</Link>
      </div>
      <div className="googleLogin">---------- Log in With google ---------</div>
    </div>
  );
};

export default SignUp;
