const mongoose = require("mongoose");
const moment = require("moment");

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true        
  },
  userDisplayName: {
    type: String
  },
  disciplineId: {
    type: mongoose.Schema.Types.ObjectId,
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
  date: {
    type: Date,
    default: Date.now
  }
});

activitySchema.virtual("week").get(function() {
  const date = moment(this.date);
  return date.isoYear() + date.isoWeek();
});

module.exports = mongoose.model("Activity", activitySchema);