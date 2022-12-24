const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");
const UserModel = require("../Model/User.Model");

app.get("/", async (req, res) => {
  try {
    let data = await UserModel.find();
    console.log(data);
    res.send(data);
  } catch (e) {
    res.status(401).send("problem in get user");
  }
});

// Signup route
app.post("/create", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(401).send("User email already exist");
    } else {
      try {
        const user = new UserModel({
          name,
          email,
          password,
        });
        await user.save();
        console.log(user);
        return res.send("user created successfully");
      } catch (err) {
        return res.status(401).send("invalid cred- problem in user Singn up");
      }
    }
  } catch (e) {
    console.log(e);
    res.status(401).send(e.message);
  }
});

//Signin Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });
    return res.send({
      message: "login Successfully",
      name: user.name,
      email: user.email,
      id: user._id,
    });
  } catch (e) {
    return res.status(401).send({
      message: "invalid credential",
      place: "when login",
    });
  }
});

module.exports = app;
