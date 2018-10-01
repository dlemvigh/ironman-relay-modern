const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: { unique: true }
  },
  name: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("User", userSchema);
