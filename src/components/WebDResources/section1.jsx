import React from 'react';
import './section1.css'; // Ensure to link to the corresponding CSS file

const CardLayout = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Explore Categories</h1>
      </header>

      {/* Cards Section */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <div className="image-placeholder ">
            <img src='https://simpleicons.org/icons/w3schools.svg'></img>
          </div>
          <div className="card-description">W3Schools</div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="image-placeholder"></div>
          <div className="card-description">Electrical Branches</div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="image-placeholder"></div>
          <div className="card-description">Civil</div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <div className="image-placeholder"></div>
          <div className="card-description">Mechanical</div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
