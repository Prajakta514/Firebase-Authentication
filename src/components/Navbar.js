import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import "./Navbar.css"; // Import CSS file for Navbar styles

const Navbar = () => {
  const handleLogout = () => {
    firebase.auth().signOut(); // Sign out the user
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{marginLeft: '10px'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
