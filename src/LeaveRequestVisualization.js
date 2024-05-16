import React from 'react';

function LeaveRequestVisualization({ leaveRequests }) {
  return (
    <div className="leave-request-visualization">
      <h3>Leave Requests</h3>
      <ul>
        {leaveRequests.map(request => (
          <li key={request.id}>
            <span>{request.leaveType}</span>
            <span>{request.startDate} - {request.endDate}</span>
            <span>Status: {request.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveRequestVisualization;
