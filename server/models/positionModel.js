const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  week: {
    type: Number
  },
  position: {
    type: Number
  }
});

module.exports = mongoose.model("Position", positionSchema);