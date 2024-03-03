import React, { useState } from 'react';
import { TextField, Button, Typography, Box, InputLabel } from '@mui/material';
import { ReactComponent as Icon } from "../../test_asset/icon.svg";
import LetLogin from "../../test_asset/let_login.svg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // If validation passes, you can proceed with authentication
    // For demonstration purposes, let's just log the credentials
    console.log('Email:', email);
    console.log('Password:', password);

    // Clearing error after successful submission
    setError('');
  };

  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-sm w-full max-w-md'>
      <Icon className='w-40' />
      <img src={LetLogin} alt="Let Login" className='w-40' />
      <Box sx={{ minWidth: 300, paddingBottom: "30px" }}>
        {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
              id="email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: {
                  background: '#F0F0F0',
                  borderRadius: '10px',
                  outline: 'none',
                  border: 'none',
                }
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              id="password"
              placeholder="Enter your password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: {
                  background: '#F0F0F0',
                  borderRadius: '10px',
                  outline: 'none',
                  border: 'none',
                }
              }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;
