import React, { createContext, useState, useContext } from 'react';

// Create a Context for login state and user information
const LoginContext = createContext();

// Provider component to manage login state and user information
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [user, setUser] = useState(null); // State for storing user information
  const [authToken, setAuthToken] = useState(null); // State for storing JWT token

  // Login function to set user details and token
  const login = (userInfo, token) => {
    setIsLoggedIn(true);
    setUser(userInfo);
    setAuthToken(token);
    localStorage.setItem('authToken', token); // Optionally save token to localStorage
  };

  // Logout function to clear user details and token
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem('authToken'); // Remove token from localStorage
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, authToken, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook to use login context
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};