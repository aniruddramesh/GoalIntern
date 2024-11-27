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
import Learn from './components/Learn/learn';
import Option from './components/Option/option';
import Domains from './components/Domains/domains'
import Roadmap from './components/RoadMap/webDRoadMap';
import WebDResources from './components/WebDResources/section1';

function App() {
  return (
    <LoginProvider>
      
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/skill-development" element={<Domains />} />
        <Route path="/option" element={<Option />} />
        <Route path="/webDRoadMap" element={<Roadmap />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/section1" element={<WebDResources/>} />

      </Routes>
    
    </LoginProvider>
  );
}

export default App;
