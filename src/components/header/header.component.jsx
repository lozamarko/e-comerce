import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
