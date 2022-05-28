import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="site-logo" />
      <div className="navItems">
        <Link to="/shop">shop</Link>
        <Link to="/orders">orders</Link>
        {/* <Link to="/inventory">inventory</Link> */}
        <Link to="/about">about</Link>
      </div>
    </nav>
  );
};

export default Header;
