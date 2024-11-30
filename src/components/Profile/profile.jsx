import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./profile.css";

const ProfilePage = () => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });

  useEffect(() => {
    // Fetch data from localStorage
    const storedProfileData = localStorage.getItem("userProfileData");
    const storedProgress = localStorage.getItem("userProgress");

    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
    if (storedProgress) {
      setCompletionPercentage(parseInt(storedProgress));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProgressChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value), 0), 100); // Ensure between 0 and 100
    setCompletionPercentage(value);
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("userProfileData", JSON.stringify(profileData));
    localStorage.setItem("userProgress", completionPercentage);
    setIsEditing(false); // Exit editing mode
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-header">Profile Page</h1>

        {/* Name Section */}
        <div className="profile-section">
          <h2 className="section-title">Your Name:</h2>
          {isEditing ? (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={profileData.name}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <p className="profile-info">{profileData.name || "Your Name"}</p>
          )}
        </div>

        {/* Progress Section */}
        <div className="profile-section">
          <h2 className="section-title">Your Progress:</h2>
          <div className="progress-container">
            <CircularProgressbar
              value={completionPercentage}
              text={`${completionPercentage}%`}
              styles={buildStyles({
                textColor: "#333",
                pathColor: "#4caf50",
                trailColor: "#ddd",
              })}
            />
          </div>
          {isEditing && (
            <div className="progress-input-container">
              <label htmlFor="progress" className="progress-label">
                Set Progress:
              </label>
              <input
                type="number"
                id="progress"
                name="progress"
                value={completionPercentage}
                onChange={handleProgressChange}
                min="0"
                max="100"
                className="progress-input"
              />
            </div>
          )}
        </div>

        {/* Bio Section */}
        <div className="profile-section">
          <h2 className="section-title">About You:</h2>
          {isEditing ? (
            <textarea
              name="bio"
              placeholder="Write something about yourself..."
              value={profileData.bio}
              onChange={handleChange}
              className="profile-input"
              rows="4"
            />
          ) : (
            <p className="profile-info">{profileData.bio || "Tell us about yourself!"}</p>
          )}
        </div>

        {/* Profile Actions */}
        <div className="profile-actions">
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>
              Save Profile
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditToggle}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
