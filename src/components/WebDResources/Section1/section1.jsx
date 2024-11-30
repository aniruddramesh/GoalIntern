import React, { useState, useEffect } from 'react';
import './section1.css';
import UploadForm from './UploadForm';
import PdfViewer from './pdfViewer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation

const initialResources = [
  {
    type: 'external',
    image: 'https://simpleicons.org/icons/w3schools.svg',
    description: 'W3Schools',
    link: 'https://www.w3schools.com/html',
  },
  {
    type: 'external',
    image: 'https://simpleicons.org/icons/freecodecamp.svg',
    description: 'FreeCodeCamp',
    link: 'https://www.youtube.com/freecodecamp',
  },
  {
    type: 'internal',
    image: '/images/html-guide.svg',
    description: 'HTML Guide',
    link: '/resources/html-guide',
  },
  {
    type: 'internal',
    image: '/images/css-tutorial.svg',
    description: 'CSS Tutorial',
    link: '/resources/css-tutorial',
  },
  {
    type: 'internal',
    image: '/images/pdf-icon.svg',
    description: 'My PDF Guide',
    link: '/resources/html.pdf',
  },
];

const CardLayout = () => {
  const [resources, setResources] = useState(initialResources);
  const [file, setFile] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Load uploaded files from local storage and add them to the resources state
  useEffect(() => {
    const storedResources = JSON.parse(localStorage.getItem('resources'));
    if (storedResources) {
      setResources((prevResources) => [...prevResources, ...storedResources]);
    }
  }, []);

  // Save new resources to local storage whenever the resources state changes
  useEffect(() => {
    const resourcesToStore = resources.filter(
      (resource) => !initialResources.some((initResource) => initResource.description === resource.description)
    );
    localStorage.setItem('resources', JSON.stringify(resourcesToStore));
  }, [resources]);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);

    // Create a new resource entry for the uploaded file
    const fileUrl = URL.createObjectURL(selectedFile);
    const newResource = {
      type: 'internal',
      image: '/images/pdf-icon.svg',
      description: selectedFile.name,
      link: fileUrl, // Set the generated URL as the link
    };

    // Add the new resource to the existing resources state
    setResources((prevResources) => [...prevResources, newResource]);
  };

  const handleCardClick = (resource) => {
    if (resource.type === 'internal') {
      // Redirect to the generated file URL
      window.open(resource.link, '_blank'); // Open in a new tab
    }
  };

  const handleRemoveFile = (resourceToRemove) => {
    // Remove the file from the state
    const updatedResources = resources.filter(resource => resource.description !== resourceToRemove.description);
    setResources(updatedResources);

    // Update local storage
    const resourcesToStore = updatedResources.filter(
      (resource) => !initialResources.some((initResource) => initResource.description === resource.description)
    );
    localStorage.setItem('resources', JSON.stringify(resourcesToStore));
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Explore Resources</h1>
      </header>

      {/* Cards Section */}
      <div className="card-container">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(resource)}
            style={{ cursor: resource.type === 'internal' ? 'pointer' : 'default' }}
          >
            <div className="image-placeholder">
              {resource.image ? (
                <img src={resource.image} alt={resource.description} />
              ) : (
                'Image Here'
              )}
            </div>
            <div className="card-description">{resource.description}</div>
            {resource.type === 'internal' && (
              <button className="remove-btn" onClick={(e) => {
                e.stopPropagation(); // Prevent card click event
                handleRemoveFile(resource);
              }}>
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* New PDF Upload and Viewer Section */}
      <div className="pdf-section">
        <UploadForm onFileSelect={handleFileSelect} />
        {file && <PdfViewer file={file} />}
      </div>
    </div>
  );
};

export default CardLayout;
