// jobSchema.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  type: String,
  location: String,
  region: String,
  title: String,
  email: String,
  companyname: String,
  LNusrnm: String,
  twitter: String,
  tagline: String,
  FBusrnm: String,
  website: String,
  jobDescription: String
});

module.exports = mongoose.model("Job", jobSchema);
