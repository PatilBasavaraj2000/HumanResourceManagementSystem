import React from 'react';
import './EmployeeDetailsPage.css'; // You can create a separate CSS file for styling

function EmployeeDetailsPage({ employee }) {
  return (
    <div className="employee-details-page">
      <h2>Employee Details</h2>
      <div>
        <h3>{employee.name}</h3>
        <p>Position: {employee.position}</p>
        <p>Department: {employee.department}</p>
        <p>Contact: {employee.contact}</p>
        {/* Add any other employee details you want to display */}
      </div>
    </div>
  );
}

export default EmployeeDetailsPage;
