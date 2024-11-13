import React, { createContext, useState, useContext } from 'react';

// Create a Context to hold login state
const LoginContext = createContext();

// Provider component to manage login state
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);  // Set logged in state to true
  };

  const logout = () => {
    setIsLoggedIn(false); // Set logged in state to false
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook to use login context
export const useLogin = () => useContext(LoginContext);
