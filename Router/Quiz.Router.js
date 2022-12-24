const express = require("express");
const app = express.Router();
const QuizModel = require("../Model/Quiz.Model")

app.get("/", async (req, res) => {


  try {
    let post = await QuizModel.find();
    return res.send(post);
  } catch (e) {
    return res.send(e);
  }
});

// let questionCategory = await Question.find({
//   $and: [{ difficulty: level }, { category: category }],
// }).limit(limit);

app.post("/getquiz", async (req, res) => {
let {category,total,difficulty}=req.body
// { category: 'Sports', total: '5', difficulty: 'easy' }

  try {
    let question = await QuizModel.find({
        $and: [{ difficulty: difficulty }, { category: category }],
      }).limit(Number(total))
    return res.send(question);
  } catch (e) {
    return res.send(e);
  }
});

app.post("/create", async (req, res) => {
  // console.log("signup")

  try {
    const post = new QuizModel(req.body);
    await post.save();
    console.log(post);
    return res.send("Post created successfully");
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
});






module.exports = app;
