const { model, Schema } = require("mongoose");

const quizSchema = new Schema({
  category: { type: String},
  type: { type: String },
  difficulty: { type: String },
  question: { type: String },
  correct_answer: { type: String },
  incorrect_answers: { type:Array  },



});

const QuizModel = model("quiz", quizSchema);

module.exports = QuizModel;
