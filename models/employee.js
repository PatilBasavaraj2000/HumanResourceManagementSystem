const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    contact: { type: String, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('Employee', employeeSchema);
