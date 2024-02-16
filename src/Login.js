// Login.js

import React from 'react';
import { useEffect, useState } from "react";
import { doSignInWithGoogle } from './authfile';
import { useAuth } from './context/auth1';

const Login = () => {
    const { userLoggedIn } = useAuth('');
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle()
                .then(result => {
                    // Handle successful sign-in
                })
                .catch(error => {
                    // Handle sign-in error
                    console.error('Error signing in:', error);
                })
                .finally(() => {
                    // Reset signing in state
                    setIsSigningIn(false);
                });
        }
    }

    return (
        <div className="login">
            <div className="login__logo">
                <p>welcome</p>
            </div>
            <button type="button" onClick={onGoogleSignIn}>
                Sign In
            </button>
        </div>
    );
}

export default Login;
