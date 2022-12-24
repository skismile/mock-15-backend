const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    // `Date.now()` returns the current unix timestamp as a number
    default: new Date().toString(),
  },
});

const UserModel = mongoose.model("ticketuser", UserSchema);

module.exports = UserModel;
