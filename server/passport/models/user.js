const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  username: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;