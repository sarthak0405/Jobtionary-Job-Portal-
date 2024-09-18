const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: String,
  requirement: String,
});

module.exports = mongoose.model("Company", jobSchema);
