const { model, Schema } = require("mongoose");

const TicketSchema = new Schema({
  category: { type: String,required:true},
  title: { type: String,required:true },
  message: { type: String,required:true },
  date: { type: String,default:new Date().toString() },
  



});

const TicketModel = model("ticket", TicketSchema);

module.exports = TicketModel;
