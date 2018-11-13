const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
    text: String,
    score: Number
})

const Answer = mongoose.model('answer', answerSchema);
module.exports = Answer;