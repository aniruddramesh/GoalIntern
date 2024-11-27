import React from 'react';
import './option.css';
import { Link } from 'react-router-dom';

function HomePage() {
  const openChatBot = () => {
    // Chatbot container
    const botContainer = document.createElement('div');
    botContainer.style.position = 'fixed';
    botContainer.style.bottom = '20px';
    botContainer.style.right = '20px';
    botContainer.style.width = '500px';
    botContainer.style.height = '650px';
    botContainer.style.border = '1px solid #ddd';
    botContainer.style.borderRadius = '10px';
    botContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    botContainer.style.backgroundColor = '#ffffff';
    botContainer.style.zIndex = '1000';
    botContainer.id = 'chatbot-container';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerText = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = '#ff4b5c';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';
    closeButton.style.fontSize = '18px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    closeButton.onclick = () => {
      document.body.removeChild(botContainer);
    };

    // Chatbot iframe
    const iframe = document.createElement('iframe');
    iframe.src =
      'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/27/16/20241127160032-IE6NHNYL.json';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '0 0 10px 10px';

    botContainer.appendChild(closeButton);
    botContainer.appendChild(iframe);
    document.body.appendChild(botContainer);
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
