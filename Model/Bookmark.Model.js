const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const BookmarkSchema = new Schema({
  category: { type: String,required:true},
  title: { type: String,required:true },
  message: { type: String,required:true },




});

const BookmarkModel = model("ticketbookmark", BookmarkSchema);

module.exports = BookmarkModel;
