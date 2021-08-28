const mongoose = require("mongoose");

const AppionmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
 time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  spaType: {
    type: String,
    required: true,
  },
  status:{
      type:String,
      required: true,
  }
});

module.exports = new mongoose.model("Appionment", AppionmentSchema);
