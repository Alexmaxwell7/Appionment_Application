const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  employeeRole: {
    type: String,
    required: true,
  },
  


});

module.exports = new mongoose.model("Employee", EmployeeSchema);