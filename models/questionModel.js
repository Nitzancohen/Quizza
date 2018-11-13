const mongoose = require('mongoose');
const answerSchema = require('./answerModel');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
    text: String,
    answer: [answerSchema]
})

const Question = mongoose.model('question', questionSchema);
module.exports = Question;