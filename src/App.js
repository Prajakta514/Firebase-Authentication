import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import A from "./A";
import Navbar from "./components/Navbar";
import firebase from "./firebase"; // Import Firebase

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to track user's authentication status

  // Check if user is logged in on component mount
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true); // Set loggedIn to true if user is logged in
      } else {
        setLoggedIn(false); // Set loggedIn to false if user is not logged in
      }
    });
  }, []);

  return (
    <Router>
      <div>
        {loggedIn && <Navbar />} {/* Display Navbar only if user is logged in */}
        <Routes>
          {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<A />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
