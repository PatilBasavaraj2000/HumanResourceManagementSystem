// LeaveManagementModule.js
import React, { useState } from 'react';
import LeaveRequestForm from './LeaveRequestForm';
import CalendarView from './CalendarView';
import LeaveRequestVisualization from './LeaveRequestVisualization';
import LeaveApproval from './LeaveApproval';

function LeaveManagementModule() {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Function to handle leave request submission
  const handleLeaveRequest = (newRequest) => {
    setLeaveRequests([...leaveRequests, newRequest]);
  };

  // Function to handle leave request approval/rejection
  const handleLeaveApproval = (requestId, status) => {
    const updatedRequests = leaveRequests.map(request =>
      request.id === requestId ? { ...request, status } : request
    );
    setLeaveRequests(updatedRequests);
  };

  return (
    <div>
      <h2>Leave Management Module</h2>
      <LeaveRequestForm onSubmit={handleLeaveRequest} />
      <CalendarView leaveRequests={leaveRequests} />
      <LeaveRequestVisualization leaveRequests={leaveRequests} />
      <LeaveApproval leaveRequests={leaveRequests} onApproval={handleLeaveApproval} />
    </div>
  );
}

export default LeaveManagementModule;
