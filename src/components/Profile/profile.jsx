import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./profile.css";

const ProfilePage = () => {
  const completionPercentage = 75; // Dynamic value to be integrated with Spring Boot later

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Header Section */}
        <div className="profile-header">
          <div className="header-content">
            <img
              className="profile-image"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-job-title">Software Engineer</p>
          </div>
          {/* Circular Progress Tracker */}
          <div className="progress-tracker">
            <h2 className="progress-title">Overall Progress</h2>
            <CircularProgressbar
              value={completionPercentage}
              text={`${completionPercentage}%`}
              styles={buildStyles({
                textColor: "#f0db4f",
                pathColor: "#f0db4f",
                trailColor: "#444",
              })}
            />
          </div>
        </div>

        {/* Profile Bio */}
        <div className="profile-bio">
          Passionate about solving complex problems through innovative solutions.
          Loves working on full-stack projects and contributing to open-source communities.
        </div>

        {/* Profile Details Section */}
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

        {/* Stats Section */}
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

        {/* Actions Section */}
        <div className="profile-actions">
          <button className="edit-button">Edit Profile</button>
          <button className="view-button">View Challenges</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
