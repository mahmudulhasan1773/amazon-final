import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="logIn">
      Login
      <div className="input-group">
        <label>Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" name="email" id="password" required />
      </div>
      <button className="submit-btn">Submit</button>
      <div>
        Not registered? please <Link to="/signUp">sign up.</Link>
      </div>
      <div className="googleLogin">---------- Log in With google ---------</div>
    </div>
  );
};

export default Login;
