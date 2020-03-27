import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header() {
  return (
    <nav className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/">
          Contact
        </Link>
        {/* <Link className="option" to="/dashboard">
          Dashboard
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;
