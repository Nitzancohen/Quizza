const mongoose = require('mongoose');
const questionSchema = require('./questionModel');
const resultSchema = require('./resultModel');
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    name: String,
    desc: String,
    questions: [questionSchema],
    results: [resultSchema]
})

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;