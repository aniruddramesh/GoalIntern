import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../Auth/LoginContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login();
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error("Login failed. Please try again.");
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
        hideProgressBar="false"
        theme="light"
      />
    </div>
  );
}

export default Login;
