import React from 'react';
import './section3.css';

const CardLayout = () => {
  const cards = [
    { image: 'https://simpleicons.org/icons/w3schools.svg', description: 'W3Schools ', link: 'https://www.w3schools.com/html' },
    { image: 'https://simpleicons.org/icons/freecodecamp.svg', description: 'FreeCodeCamp', link: 'https://www.youtube.com/freecodecamp' },
    { image: 'https://simpleicons.org/icons/civil.svg', description: 'Civil Engineering', link: 'https://www.youtube.com/tylermcginni' },
    { image: 'https://simpleicons.org/icons/mechanical.svg', description: 'Mechanical Engineering', link: 'https://www.asme.org' },
    { image: 'https://simpleicons.org/icons/computerscience.svg', description: 'Computer Science', link: 'https://www.geeksforgeeks.org' },
    { image: 'https://simpleicons.org/icons/ai.svg', description: 'Artificial Intelligence', link: 'https://www.ai.org' },
    { image: 'https://simpleicons.org/icons/datascience.svg', description: 'Data Science', link: 'https://www.datasciencecentral.com' },
    { image: 'https://simpleicons.org/icons/chemicalengineering.svg', description: 'Chemical Engineering', link: 'https://www.aiche.org' },
    { image: 'https://simpleicons.org/icons/aerospace.svg', description: 'Aerospace Engineering', link: 'https://www.aiaa.org' },
    { image: 'https://simpleicons.org/icons/robotics.svg', description: 'Robotics', link: 'https://robotics.org' },
  ];

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Explore Categories</h1>
      </header>

      {/* Cards Section */}
      <div className="card-container">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="image-placeholder">
              {card.image ? <img src={card.image} alt={card.description} /> : 'Image Here'}
            </div>
            <div className="card-description">{card.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
