import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

import EvidenceUploadingPage from './components/EvidenceUploadingPage';
import ReportGenerationPage from './components/ReportGeneration';
import CaseManagementPage from './components/CaseMAnagementPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cases">Case Management</Link>
            </li>
            <li>
              <Link to="/evidence">Evidence Uploading</Link>
            </li>
            <li>
              <Link to="/reports">Report Generation</Link>
            </li>
          </ul>
        </nav>

        <BrowserRouter>
          <Route path="/cases" component={CaseManagementPage} />
          <Route path="/evidence" component={EvidenceUploadingPage} />
          <Route path="/reports" component={ReportGenerationPage} />
        </BrowserRouter>
      </div>
    </Router>
  );
};

export default App;
