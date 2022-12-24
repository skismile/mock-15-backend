const express = require("express");
const app = express.Router();
const BookmarkModel = require("../Model/Bookmark.Model")

app.get("/", async (req, res) => {


  try {
    let post = await BookmarkModel.find();
    return res.send(post)
  } catch (e) {
    return res.send(e);
  }
});


app.post("/create", async (req, res) => {

    try {
      const post = new BookmarkModel(req.body);
      await post.save();
      console.log(post);
      return res.send("Bookmark created successfully");
    } catch (err) {
      console.log(err);
      return res.status(401).send(err);
    }
  });

module.exports=app