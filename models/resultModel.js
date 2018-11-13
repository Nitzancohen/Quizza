const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema ({
    maxScore: Number,
    minScore: Number,
    title: String,
    desc: String
})

const Result = mongoose.model('result', resultSchema);
module.exports = Result;