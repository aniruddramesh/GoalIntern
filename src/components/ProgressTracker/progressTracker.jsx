import React, { useState, useEffect } from "react";
import "./profile.css"; // Keep your existing styles

const ProfilePage = () => {
  const [progress, setProgress] = useState(0); // Track progress as a percentage

  // Simulating checkpoints being cleared dynamically
  useEffect(() => {
    const checkpoints = [20, 40, 60, 80, 100]; // Define checkpoint percentages
    let index = 0;

    const interval = setInterval(() => {
      if (index < checkpoints.length) {
        setProgress(checkpoints[index]); // Update progress
        index++;
      } else {
        clearInterval(interval); // Stop the interval when all checkpoints are done
      }
    }, 2000); // Update progress every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <img
            className="profile-image"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-job-title">Software Engineer</p>
        </div>

        {/* Progress Tracker */}
        <div className="progress-section">
          <h2>Progress Tracker</h2>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{progress}% completed</p>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <h2 className="details-title">Details</h2>
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">john.doe@example.com</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">+1 (555) 123-4567</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">New York, USA</span>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <h2 className="stats-title">Stats</h2>
          <div className="stat-item">
            <span className="stat-value">150</span>
            <span className="stat-label">Challenges Solved</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">45</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1200</span>
            <span className="stat-label">Ranking Points</span>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="profile-actions">
          <button className="edit-button">Edit Profile</button>
          <button className="view-button">View Challenges</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
