// UploadForm.jsx
import React from 'react';

const UploadForm = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Your PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
    </div>
  );
};

export default UploadForm;
