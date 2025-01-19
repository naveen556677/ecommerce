// src/pages/SignUp.js
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp({handleLogin,email,setEmail,password,setPassword}) {
  const navigate=useNavigate();

  const [errorMessageSignup,setErrorMessageSignup]=useState('')
  const up=()=>{
    navigate('/Login')
  }
  const handleSignUp = () => {
    
    // Simple sign-up simulation (without a real backend)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = storedUsers.find((user) => user.email === email);
    
    if (user) {
      // Check if the password matches the stored password for the email
      if (user.password === password) {
        handleLogin(email, password);
        
        // No need to store the email again, it's already in localStorage
        setErrorMessageSignup('');
        navigate('*'); // Redirect to the cart page after successful login
      } else {
        setErrorMessageSignup('Incorrect password. Please try again.');
      }
    }else {
      setErrorMessageSignup('Incorrect email and password. Please try again.');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Sign Up</Typography>
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button onClick={handleSignUp} fullWidth variant="contained" color="primary">
        Sign Up
      </Button>
      {errorMessageSignup && (
              <Typography color="error" variant="body2">{errorMessageSignup}</Typography>
            )}
            <Typography>you already have an account <button  onClick={up}>Login</button></Typography>
    </div>
  );
}

export default SignUp;
