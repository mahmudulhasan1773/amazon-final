import React from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      sign up.
      <div className="input-group">
        <label>Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" name="email" id="password" />
      </div>
      <button className="submit-btn">Submit</button>
      <div>
        Allready registered? please <Link to="/login">Login.</Link>
      </div>
      <div className="googleLogin">---------- Log in With google ---------</div>
    </div>
  );
};

export default SignUp;
