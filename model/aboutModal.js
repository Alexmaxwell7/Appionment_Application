const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

});

module.exports = new mongoose.model("About", AboutSchema);