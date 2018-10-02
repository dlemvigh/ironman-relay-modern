const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true        
  },
  userDisplayName: {
    type: String
  },
  discipline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discipline",
    required: true
  },
  disciplineDisplayName: {
    type: String
  },
  distance: {
    type: Number,
    default: 0
  },
  unit: {
    type: String,
  },
  score: {
    type: Number,
    default: 0
  },  
  date: {
    type: Date,
    default: Date.now
  },
  week: {
    type: Number
  },
});

module.exports = mongoose.model("Activity", activitySchema);