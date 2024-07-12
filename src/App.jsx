import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReportForm from "./components/ReportForm";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportForm />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
