const express = require("express");
const app = express.Router();
const TicketModel = require("../Model/Ticket.Model")

app.get("/", async (req, res) => {


  try {
    let post = await TicketModel.find();
    return res.send(post);
  } catch (e) {
    return res.send(e);
  }
});

// let questionCategory = await Question.find({
//   $and: [{ difficulty: level }, { category: category }],
// }).limit(limit);

app.post("/create", async (req, res) => {

  try {
    const post = new TicketModel(req.body);
    await post.save();
    console.log(post);
    return res.send("Post created successfully");
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
});














module.exports = app;
