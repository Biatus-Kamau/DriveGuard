import React, { useState } from 'react';
import './comp.css';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    route: '',
    location: '',
    description: '',
    levelOfConcern: 'low'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ vehicleNumber: '', route: '', location: '', description: '', levelOfConcern: 'low' });
  };

  return (
    <div className="form-container">
      <h2>Report Unsafe Driving</h2>
      <form onSubmit={handleSubmit} className="report-form">

        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number</label>
          <input
            id="vehicleNumber"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            placeholder="Vehicle Number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="route">Route</label>
          <input
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            placeholder="Route"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="levelOfConcern">Level of Concern</label>
          <select
            id="levelOfConcern"
            name="levelOfConcern"
            value={formData.levelOfConcern}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportForm;
