import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API requests

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);
  const [token, setToken] = useState('');

  // Retrieve email from localStorage if available
  useEffect(() => {
    const savedEmail = localStorage.getItem('forgotPasswordEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  // Save email to localStorage whenever it changes
  useEffect(() => {
    if (email) {
      localStorage.setItem('forgotPasswordEmail', email);
    }
  }, [email]);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage('A reset link has been sent to your email.');
      // Assuming the response contains a token to be used for resetting the password
      setToken(response.data.token); // Adjust based on your API response
      setShowResetForm(true);
    } catch (error) {
      setMessage('Error: Could not send reset email. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      {!showResetForm ? (
        <>
          <h2>Forgot Password?</h2>
          <form onSubmit={handleSubmitEmail}>
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
        </>
      ) : (
        <ResetPasswordForm token={token} />
      )}
    </div>
  );
}

// Password reset form component
function ResetPasswordForm({ token }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('/api/reset-password', { token, newPassword });
      setMessage('Password successfully reset.');
      // Optionally, clear the state after successful submission
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage('Error: Could not reset password. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
