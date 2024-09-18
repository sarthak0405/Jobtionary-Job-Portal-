const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullname: String,
  email: String,
  usrnm: String,
  pwrd: String,
  phone: Number,
  dob: Date,
  gender: String,
});

const model = mongoose.model("Data", schema);

module.exports = model;
