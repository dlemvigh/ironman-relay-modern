const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  userDisplayName: {
    type: String
  },
  score: {
    type: Number,
    default: 0
  },
  week: {
    type: Number
  }
});

summarySchema.index({
  user: 1,
  week: 1
}, {
  unique: true
});

module.exports = mongoose.model("Summary", summarySchema);