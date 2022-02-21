import React from "react";
import { Link } from "react-router-dom";

import style from "./Nav.module.css";

const inStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "22px",
  display: "flex",
  alignItems: "center"
};

const Nav = () => {
  return (
    <nav className={`container ${style.navbar}`}>
      <Link style={inStyle} to="/">
        <img src="/images/logo.svg" alt="logo" />
        <span style={{marginLeft: "10px"}}>My house</span>
      </Link>
    </nav>
  );
};

export default Nav;
