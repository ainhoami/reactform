const mongoose = require("mongoose");

const TrainerrSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  goals: {
    type: Array,
  },
  callDate: {
    type: Date,
  },
  freeInfo: {
    type: String,
  },
});

module.exports = mongoose.model("trainerr", TrainerrSchema);
