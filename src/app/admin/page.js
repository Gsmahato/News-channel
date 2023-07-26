"use client"
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Prepare the request body to send to the server
    const requestBody = {
      username,
      password,
    };
  
    try {
      // Make the API call to your backend server for authentication
      const response = await fetch('https://www.bimaabazar.com/newsportal/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      console.log(response)
  
      if (response.ok) {
        // Authentication successful
        toast.success('Login successful', {
          position: toast.POSITION.TOP_CENTER,
        });
  
        // Perform appropriate actions (e.g., redirect to dashboard)
        console.log('Authentication successful');
      } else if (response.status === 403) {
        // Authentication failed due to authorization issues
        toast.error('Forbidden: Access Denied', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log('Authorization error: Forbidden');
      } else {
        // Other non-successful response status
        toast.error('Login failed', {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log('Authentication failed', response.status);
      }
    } catch (error) {
      // Handle network errors
      toast.error('Error occurred during login', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error('Error occurred during login:', error);
    }
  };


  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default SignIn;
