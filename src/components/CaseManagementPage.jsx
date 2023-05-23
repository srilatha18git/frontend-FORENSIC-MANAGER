import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CaseManagementPage = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await axios.get('/api/cases');
      setCases(response.data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  return (
    <div>
      <h1>Case Management</h1>
      <table>
        <thead>
          <tr>
            <th>Case Number</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.caseNumber}</td>
              <td>{caseItem.date}</td>
              <td>{caseItem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseManagementPage;
