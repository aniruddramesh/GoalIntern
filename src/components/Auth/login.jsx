import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../Auth/LoginContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useLogin(); // Assuming `useLogin` provides a way to set logged-in user details.
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const token = await response.text(); // Backend returns a JWT token.
        localStorage.setItem('authToken', token); // Store token for subsequent requests.
        setUser({ username }); // Update user context or state.
        toast.success('Logged in successfully!');
        navigate('/dashboard'); // Navigate to dashboard or home page.
      } else {
        toast.error('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h4 className="login-title">Welcome back!</h4>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        theme="light"
      />
    </div>
  );
}

export default Login;
