import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReportForm from './components/ReportForm';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <nav className="navbar">
            <div className="brand">DriveGuard</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/report">Report</Link>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
