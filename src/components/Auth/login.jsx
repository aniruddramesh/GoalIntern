import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../Auth/LoginContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);  // State to toggle between login and forgot password
  const [email, setEmail] = useState('');  // For forgot password form
  const { login } = useLogin();
  const navigate = useNavigate();

  // Handle Login form submit
  const handleLoginSubmit = async (e) => {
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
        const token = await response.text();
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userInfo = { username: decodedToken.sub };
        login(userInfo, token);
        toast.success('Logged in successfully!');
        navigate('/'); // Navigate to a secured route
      } else {
        toast.error('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  // Handle Forgot Password form submit
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    const requestBody = { email };

    try {
      const response = await fetch('http://localhost:8080/forgot-password?email=' + email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        toast.success('Password reset email sent!');
        setIsForgotPassword(false);  // Go back to login form after success
      } else {
        toast.error('Email not found. Please try again.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h4 className="login-title">{isForgotPassword ? 'Reset Your Password' : 'Welcome back!'}</h4>

        {!isForgotPassword ? (
          // Login Form
          <form onSubmit={handleLoginSubmit}>
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
            <div className="forgot-password">
              <button
                type="button"
                onClick={() => setIsForgotPassword(true)}
                className="forgot-password-button"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        ) : (
          // Forgot Password Form
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="forgot-password-field">
              <label htmlFor="email">Enter your email to receive a password reset link:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="forgot-password-button">Send Reset Link</button>
            <div className="back-to-login">
              <button
                type="button"
                onClick={() => setIsForgotPassword(false)}
                className="back-to-login-button"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
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
