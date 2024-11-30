// PdfViewer.jsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ file }) => {
  if (!file) {
    return <p>No PDF file selected</p>;
  }

  const fileUrl = URL.createObjectURL(file);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>View My PDF Guide</h1>
      <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
