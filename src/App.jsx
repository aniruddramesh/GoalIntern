import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';  // Only import Routes and Route, no need for Router here
import Login from './components/Auth/login';  // Import your Login component
 import Register from './components/Auth/register';  // Import your Register component
import Home from './components/Home/home';
import Branch from './components/Branch/branch';
import Header from './components/Header/header';
import Semester from './components/Semester/semester';
import Getstarted from './components/GetStarted/getstarted';
import { LoginProvider } from './components/Auth/LoginContext';
import Profile from './components/Profile/profile';

function App() {
  return (
    <LoginProvider>
      
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/branch/sem" element={<Semester />} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    
    </LoginProvider>
  );
}

export default App;
