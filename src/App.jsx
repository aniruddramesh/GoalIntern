import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';  
import Login from './components/Auth/login'; 
import Home from './components/Home/home';
import Branch from './components/Branch/branch';
import Header from './components/Header/header';
import Semester from './components/Semester/semester';
import Getstarted from './components/Getstarted/getstarted';
import { LoginProvider } from './components/Auth/LoginContext';
import Profile from './components/Profile/profile';
import Contact from './components/Contact/contact'
import Signup from './components/Auth/signup';
import Learn from './components/Learn/learn';
import Option from './components/Option/option';
import Domains from './components/Domains/domains'
import Roadmap from './components/RoadMap/webDRoadMap';
import Section1 from './components/WebDResources/Section1/section1';
import Section2 from './components/WebDResources/Section2/section2';
import Section3 from './components/WebDResources/Section3/section3';
import Footer from './components/Footer/footer';
import Documentation from './components/Documentation/documentation';
// import Section4 from './components/WebDResources/Section4/section4';
// import Section5 from './components/WebDResources/section5';



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
        <Route path="/section1" element={<Section1/>} />
        <Route path="/section2" element={<Section2/>} />
        <Route path="/section3" element={<Section3/>} />
        {/* <Route path="/section4" element={<Section4/>} /> */}
        {/* <Route path="/section5" element={<Section5/>} /> */}
        <Route path="/documentation" element={<Documentation/>} />

        </Routes>
      
  
    </LoginProvider>
  );
}

export default App;
