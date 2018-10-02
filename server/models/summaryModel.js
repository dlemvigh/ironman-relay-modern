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
  // run: {
  //   type: Number,
  //   default: 0
  // },
  // bike: {
  //   type: Number,
  //   default: 0
  // },
  // swim: {
  //   type: Number,
  //   default: 0
  // },
  // cal: {
  //   type: Number,
  //   default: 0
  // },
  // misc: {
  //   type: Number,
  //   default: 0
  // },
  week: {
    type: Number
  }
});

module.exports = mongoose.model("Summary", summarySchema);