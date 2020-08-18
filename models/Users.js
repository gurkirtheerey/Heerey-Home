const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  username: String,
  hashedPassword: {
    type: String,
    required: true,
  },
  goal: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
