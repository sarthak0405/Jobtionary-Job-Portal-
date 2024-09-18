const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  usrnm: String,
  pwrd: String,
});

const model = mongoose.model("AdminData", schema);

module.exports = model;
