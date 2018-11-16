import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <h1>Runr</h1>
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>

          
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className={
              window.location.pathname === "/login"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Login
          </Link>


<<<<<<< HEAD:client/src/components/Navbar/Navbar.js
        </li>
        <li className="nav-item">
          <Link
            to="/signup"
            className={
              window.location.pathname === "/sign up"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/map"
            className={
              window.location.pathname === "/map"
=======
        </li>
        <li className="nav-item">
          <Link
            to="/signup"
            className={
              window.location.pathname === "/sign up"
>>>>>>> d0fc3fac7ca80c3f465bdcc1077c01303d1f5e3b:src/components/Navbar/Navbar.js
                ? "nav-link active"
                : "nav-link"
            }
          >
<<<<<<< HEAD:client/src/components/Navbar/Navbar.js
            Map
=======
            Sign Up
>>>>>>> d0fc3fac7ca80c3f465bdcc1077c01303d1f5e3b:src/components/Navbar/Navbar.js
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
