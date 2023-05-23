import React, { useState } from 'react';
import axios from 'axios';

const EvidenceUploadingPage = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadEvidence = async () => {
    try {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('file', file);

      await axios.post('/api/cases/{caseId}/evidence', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset form fields after successful upload
      setDescription('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading evidence:', error);
    }
  };

  return (
    <div>
      <h1>Evidence Uploading</h1>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>File:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleUploadEvidence}>Upload Evidence</button>
    </div>
  );
};

export default EvidenceUploadingPage;
