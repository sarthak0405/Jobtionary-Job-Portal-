const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  education: String,
  position: String,
  companyName: String,
  experience: String,
});

module.exports = mongoose.model("Jobapplicant", jobSchema);
