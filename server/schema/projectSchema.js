const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  sourceCode: {
    type: String,
    required: true,
  },
});

module.exports = projectSchema;
