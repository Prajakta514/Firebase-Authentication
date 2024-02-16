import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "./firebase";
import "./Auth.css"; 

const Auth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome!</h2>
      <div className="auth-buttons">
        <button className="google-button" onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>
      </div>
      <div className="auth-form">
        <h3>Sign In with Email</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="auth-buttons">
          <button className="email-button" onClick={handleEmailSignIn}>
            Sign In
          </button>
          <button className="email-button" onClick={handleEmailSignUp}>
            Sign Up
          </button>
        </div>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Auth;
