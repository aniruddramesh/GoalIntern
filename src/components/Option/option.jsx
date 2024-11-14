import React from 'react';
import './option.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="option-container">
        <Link to="/skill-development" className="option-card">
          <h2>Skill Development</h2>
          <p>Enhance your skills with guided tutorials and resources.</p>
        </Link>
        <Link to="/intern-preparation" className="option-card">
          <h2>Intern Preparation</h2>
          <p>Prepare yourself with tips and resources for internships.</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
