import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="main_nav">
      <div className="logo">
        <a href="#">logo</a>
      </div>
      <ul className="list">
        <NavLink className="NavLink" to="/signin">
          <li>
            <button>Sign In</button>
          </li>
        </NavLink>

        <NavLink className="NavLink" to="/signup">
          <li>
            <button className="signUp">Sign Up</button>
          </li>
        </NavLink>

        {/* This dashboard navigation should be removed from navigation bar.It should be visible after the user has logged in to his account */}

        <NavLink className="NavLink" to="/dashboard">
          <li>
            <button className="dash">Dash</button>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
