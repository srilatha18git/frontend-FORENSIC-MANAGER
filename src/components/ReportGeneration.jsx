import React, { useState } from 'react';
import axios from 'axios';

const ReportGenerationPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleGenerateReport = async () => {
    try {
      const reportData = {
        title: title,
        content: content,
      };

      await axios.post('/api/cases/{caseId}/reports', reportData);

      // Reset form fields after successful report generation
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  return (
    <div>
      <h1>Report Generation</h1>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange} />
      </div>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
};

export default ReportGenerationPage;
