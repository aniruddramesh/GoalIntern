import React, { useState } from 'react';
import axios from 'axios'; // For making API requests

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage('A reset link has been sent to your email.');
    } catch (error) {
      setMessage('Error: Could not send reset email. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
