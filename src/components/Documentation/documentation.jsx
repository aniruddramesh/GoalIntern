import React from "react";
import "./documentation.css"; // For custom styling
import Footer from "../Footer/footer";

const DocumentationPage = () => {
  return (
    <><div className="documentation-container">
    <div className="documentation-card">
      <h1 className="title">Elevate Your Resume!</h1>
      <p className="description">
        Take your resume to the next level! Get personalized feedback and
        actionable insights with <strong>Resume Worded</strong>. Click the button below to
        start improving your resume now.
      </p>
      <div className="button-group">
        {/* Redirect button */}
        <a
          href="https://resumeworded.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="redirect-button"
        >
          Visit Resume Worded
        </a>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default DocumentationPage;