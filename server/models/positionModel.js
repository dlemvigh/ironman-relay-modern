const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  userDisplayName: {
    type: String
  },
  week: {
    type: Number
  },
  position: {
    type: Number
  }
});

module.exports = mongoose.model("Position", positionSchema);