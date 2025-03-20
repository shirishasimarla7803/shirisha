const mongoose = require("mongoose");

const SignupSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const SignupModel = mongoose.model("Signup", SignupSchema);
module.exports = SignupModel;
