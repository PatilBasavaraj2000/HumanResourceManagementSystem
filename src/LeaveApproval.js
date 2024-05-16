import React from 'react';

function LeaveApproval({ leaveRequests, onApproval }) {
  const handleApproval = (requestId, status) => {
    onApproval(requestId, status);
  };

  return (
    <div className="leave-approval">
      <h3>Leave Approval</h3>
      <ul>
        {leaveRequests.map(request => (
          <li key={request.id}>
            <span>{request.leaveType}</span>
            <span>{request.startDate} - {request.endDate}</span>
            <span>Status: {request.status}</span>
            {request.status === 'Pending' && (
              <div>
                <button onClick={() => handleApproval(request.id, 'Approved')}>Approve</button>
                <button onClick={() => handleApproval(request.id, 'Rejected')}>Reject</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveApproval;
