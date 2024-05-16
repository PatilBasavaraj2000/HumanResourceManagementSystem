import React, { useState } from 'react';
import './App.css';
import './HomePage.js';
import './HomePage.css';

import LeaveRequestForm from './LeaveRequestForm'; // Correct import
import LeaveRequestVisualization from './LeaveRequestVisualization';
import LeaveApproval from './LeaveApproval';
import HomePage from './HomePage';
import EmployeeDetailsPage from './EmployeeDetailsPage';

function App() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', contact: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', position: 'HR Manager', department: 'Human Resources', contact: 'jane.smith@example.com' },
    // Add more employees as needed
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleLeaveRequest = (newRequest) => {
    setLeaveRequests([...leaveRequests, newRequest]);
  };

  const handleLeaveApproval = (requestId, status) => {
    const updatedRequests = leaveRequests.map(request =>
      request.id === requestId ? { ...request, status } : request
    );
    setLeaveRequests(updatedRequests);
  };

  const handleEmployeeClick = (employeeId) => {
    const selected = employees.find(employee => employee.id === employeeId);
    setSelectedEmployee(selected);
  };

  return (
    <div className="App">
      <header>
        <h1>HR Management Tool</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Employees</a></li>
          <li><a href="#">Departments</a></li>
          <li><a href="#">Attendance</a></li>
          <li><a href="#">Payroll</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <main>
        {selectedEmployee ? (
          <EmployeeDetailsPage employee={selectedEmployee} />
        ) : (
          <HomePage />
        )}
        <LeaveRequestForm onSubmit={handleLeaveRequest} />
        <LeaveRequestVisualization leaveRequests={leaveRequests} />
        <LeaveApproval leaveRequests={leaveRequests} onApproval={handleLeaveApproval} />
      </main>
      <footer>
        <p>&copy; 2024 HR Management Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
