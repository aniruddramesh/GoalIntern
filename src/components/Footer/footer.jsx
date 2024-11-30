import React from 'react';
import './footer.css';
import Logo from '../Images/GoalIntern2.png'; // Replace with the correct path to your logo image

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Website Name */}
        <div className="footer-logo">
          <img src={Logo} alt="GoalIntern Logo" className="footer-logo-img" />
          <h2 className="footer-title">GoalIntern</h2>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          © 2024 GoalIntern | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
