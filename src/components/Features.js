import React from 'react';
import './Features.css'; // Ensure you have a CSS file to style this component
//import About from '../pages/About';
import { BrowserRouter, Router, Route } from 'react-router-dom';

function Features() {
  return (
    <div className="features-container">
      <h1>HRMS Features</h1>
      
      
      <div className="features-list">
        <div className="feature-item">
          <h2>Employee Management</h2>
          <p>Manage employee information, track their records, and maintain up-to-date personal details.</p>
        </div>
        <div className="feature-item">
          <h2>Leave Management</h2>
          <p>Request, approve, and track employee leave requests, ensuring smooth operations.</p>
        </div>
        <div className="feature-item">
          <h2>Payroll Management</h2>
          <p>Handle salaries, bonuses, deductions, and ensure timely payroll processing.</p>
        </div>
        <div className="feature-item">
          <h2>Performance Management</h2>
          <p>Track employee performance, conduct appraisals, and manage performance improvement plans.</p>
        </div>
        <div className="feature-item">
          <h2>Recruitment</h2>
          <p>Post job openings, review applications, and streamline the hiring process.</p>
        </div>
        <div className="feature-item">
          <h2>Training</h2>
          <p>Organize training sessions, track progress, and manage employee development programs.</p>
        </div>
        <div className="feature-item">
          <h2>Reports</h2>
          <p>Generate comprehensive reports on attendance, performance, payroll, and other key metrics.</p>
        </div>
        <div className="feature-item">
          <h2>Progress</h2>
          <p>Monitor and evaluate employee progress towards goals, track project milestones, and assess overall growth.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
