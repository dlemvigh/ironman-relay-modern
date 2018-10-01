const mongoose = require("mongoose");

const disciplineSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: { unique: true }
  },
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  order: {
    type: Number,    
  }
});

module.exports = mongoose.model("Discipline", disciplineSchema);
