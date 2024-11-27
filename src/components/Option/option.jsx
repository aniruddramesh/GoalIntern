import React from 'react';
import './option.css';
import { Link } from 'react-router-dom';

function HomePage() {
  const openChatBot = () => {
    const botContainer = document.createElement('iframe');
    botContainer.src =
      'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/27/16/20241127160032-IE6NHNYL.json';
    botContainer.style.position = 'fixed';
    botContainer.style.bottom = '20px';
    botContainer.style.right = '20px';
    botContainer.style.width = '400px';
    botContainer.style.height = '600px';
    botContainer.style.border = 'none';
    botContainer.style.zIndex = '1000';
    botContainer.id = 'chatbot-frame';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '25px';
    closeButton.style.height = '25px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      document.body.removeChild(botContainer);
      document.body.removeChild(closeButton);
    };

    document.body.appendChild(botContainer);
    document.body.appendChild(closeButton);
  };

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
        <div className="option-card" onClick={openChatBot}>
          <h2>AI Chatbot</h2>
          <p>Interact with our AI chatbot for instant support and guidance.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
