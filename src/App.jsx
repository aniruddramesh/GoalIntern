import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';  
import Login from './components/Auth/login'; 
import Home from './components/Home/home';
import Branch from './components/Branch/branch';
import Header from './components/Header/header';
import Semester from './components/Semester/semester';
import Getstarted from './components/GetStarted/getstarted';
import { LoginProvider } from './components/Auth/LoginContext';
import Profile from './components/Profile/profile';
import Contact from './components/Contact/contact'
import Signup from './components/Auth/signup';

function App() {
  return (
    <LoginProvider>
      
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/branch/sem" element={<Semester />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    
    </LoginProvider>
  );
}

export default App;
