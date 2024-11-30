import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API requests

function ResetPassword({ token }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Retrieve password data from localStorage if available
  useEffect(() => {
    const savedNewPassword = localStorage.getItem('newPassword');
    const savedConfirmPassword = localStorage.getItem('confirmPassword');
    if (savedNewPassword) {
      setNewPassword(savedNewPassword);
    }
    if (savedConfirmPassword) {
      setConfirmPassword(savedConfirmPassword);
    }
  }, []);

  // Save passwords to localStorage whenever they change
  useEffect(() => {
    if (newPassword) {
      localStorage.setItem('newPassword', newPassword);
    }
    if (confirmPassword) {
      localStorage.setItem('confirmPassword', confirmPassword);
    }
  }, [newPassword, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('/api/reset-password', { token, newPassword });
      setMessage('Password successfully reset.');
      // Optionally, clear local storage after successful submission
      localStorage.removeItem('newPassword');
      localStorage.removeItem('confirmPassword');
    } catch (error) {
      setMessage('Error: Could not reset password. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
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

export default ResetPassword;
