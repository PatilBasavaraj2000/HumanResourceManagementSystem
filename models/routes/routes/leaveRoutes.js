const express = require('express');
const router = express.Router();

// Dummy data for demonstration purposes
let leaveRequests = [
    { id: 1, employeeId: 1, type: 'Sick Leave', startDate: '2024-05-20', endDate: '2024-05-22', status: 'Pending' },
    { id: 2, employeeId: 2, type: 'Vacation Leave', startDate: '2024-06-01', endDate: '2024-06-05', status: 'Approved' },
];

// Get all leave requests
router.get('/', (req, res) => {
    try {
        res.json(leaveRequests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new leave request
router.post('/', (req, res) => {
    const newRequest = req.body;
    newRequest.id = leaveRequests.length + 1; // Assign a unique ID
    newRequest.status = 'Pending'; // Set default status
    leaveRequests.push(newRequest);
    res.status(201).json(newRequest);
});

// Update leave request status
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const requestIndex = leaveRequests.findIndex(req => req.id === parseInt(id));
    if (requestIndex === -1) {
        return res.status(404).json({ message: 'Leave request not found' });
    }
    leaveRequests[requestIndex].status = status;
    res.json(leaveRequests[requestIndex]);
});

// Delete a leave request
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const requestIndex = leaveRequests.findIndex(req => req.id === parseInt(id));
    if (requestIndex === -1) {
        return res.status(404).json({ message: 'Leave request not found' });
    }
    const deletedRequest = leaveRequests.splice(requestIndex, 1)[0];
    res.json(deletedRequest);
});

module.exports = router;
