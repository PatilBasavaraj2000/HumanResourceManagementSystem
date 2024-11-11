// src/pages/About.js
import React from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function About() {
  return (
    <div className="about-page">
      <h1>About HRMS</h1>
      <p><b>Welcome to the Human Resource Management System (HRMS). Our system is designed to streamline and automate HR processes, making it easier for organizations to manage their human resources efficiently.</b></p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Employee Management: Manage employee information, track attendance, and handle payroll.</li>
        <li>Recruitment: Streamline the hiring process, manage job postings, and track candidates.</li>
        <li>Performance Tracking:Evaluate employee performance with built-in tools and reports.</li>
        <li>Leave Management: Simplify leave requests and approvals.</li>
        <li>Reports and Analytics:Generate comprehensive reports to make informed decisions.</li>
      </ul>

      <h2>Our Mission</h2>
      <p>Our mission is to provide an efficient and user-friendly HR management solution that helps organizations achieve their human resource goals and enhance overall productivity.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or need support, please reach out to us at <a href="mailto:support@hrms.com">support@hrms.com</a>.</p>

      <h2>Follow Us</h2>
      <div className="social-media-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" aria-hidden="true"></i> Instagram
        </a>
        <a href="mailto:support@hrms.com">
          <i className="fas fa-envelope" aria-hidden="true"></i> Email
        </a>
      </div>
    </div>
  );
}

export default About;
