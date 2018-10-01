const mongoose = require("mongoose");
const moment = require("moment");

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
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
  score: {
    type: Number,
    default: 0
  },  
  week: {
    type: Number
  }
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Activity", activitySchema);