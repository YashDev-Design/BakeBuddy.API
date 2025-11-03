const mongoose = require("mongoose");

const DesertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Desert", DesertSchema);