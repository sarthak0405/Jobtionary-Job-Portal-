const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: String,
  email: String,
  phno: Number,
  course: String,
  why: String,
});

module.exports = mongoose.model("Course", jobSchema);
