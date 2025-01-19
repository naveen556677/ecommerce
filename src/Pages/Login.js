// Login.js
import React, {useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';


import { useNavigate } from 'react-router-dom';

function Login({ handleLogin,email,setEmail,password,setPassword}) {

    const [errorMessage, setErrorMessage] = useState('');
 
  
 
  
  const navigate=useNavigate();
  
 const Log=()=>{
  navigate('/SignUp')
 }
  const onSubmit = () => {
    // Get the stored users from localStorage (array of email-password pairs)
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = storedUsers.find((user) => user.email === email);
    
    if (user) {
      // Check if the password matches the stored password for the email
      if (user.password === password) {
        setErrorMessage('email already logined. Please go to signup!!!!.');
        // No need to store the email again, it's already in localStorage
        // Redirect to the cart page after successful login
      } else{
        setErrorMessage('email already logined. Please go to signup!!!!.');
      }
       
      
    } else {
      // If the email doesn't exist, create a new user and store both email and password
      storedUsers.push({ email, password }); // Add new user to the array
      localStorage.setItem('users', JSON.stringify(storedUsers)); // Store updated users array

      handleLogin(email, password);
      setErrorMessage('');
      navigate('*'); // Redirect to the cart page after successful login
    }
  };
 
  return (
    <div>
      <Typography variant="h5">Login</Typography>
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
      <Button onClick={onSubmit} fullWidth variant="contained" color="primary">
        Login
      </Button>
      {errorMessage && (
        <Typography color="error" variant="body2">{errorMessage}</Typography>
      )}
      <Typography>you already have an account <button  onClick={Log}>signup</button></Typography>
    </div>
  );
}

export default Login;
