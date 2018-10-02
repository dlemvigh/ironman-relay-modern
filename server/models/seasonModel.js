const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true }
  },
  displayName: {
    type: String,
  },
  from: {
    type: Number,
    required: true
  },
  to: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Season", seasonSchema);