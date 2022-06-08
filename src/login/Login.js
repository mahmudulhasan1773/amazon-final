import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../fiirebase.init";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
  };
  const handlePassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };
  const handeSingIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/shop");
    console.log(user);
  }
  return (
    <div className="logIn">
      <form onSubmit={handeSingIn}>
        Login
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
        <button className="submit-btn">Submit</button>
        <div>
          Not registered? please <Link to="/signUp">sign up.</Link>
        </div>
      </form>
      <div className="googleLogin">---------- Log in With google ---------</div>
    </div>
  );
};

export default Login;
