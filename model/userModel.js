const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  profile_type: {
    type: String,
    required: true,
    enum : ['Employee','Customer','Admin']
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  employeeId: {
    type: String,
  },
});

module.exports = new mongoose.model("User", UserSchema);
