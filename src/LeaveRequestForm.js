import React, { useState } from 'react';

function LeaveRequestForm({ onSubmit }) {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: Math.random().toString(36).substring(7),
      leaveType,
      startDate,
      endDate,
      status: 'Pending'
    };
    onSubmit(newRequest);
    setLeaveType('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="leave-request-form">
      <h3>Leave Request Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Leave Type:
          <input type="text" value={leaveType} onChange={(e) => setLeaveType(e.target.value)} />
        </label>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LeaveRequestForm;
