const express = require('express');
const router = express.Router();
const Quiz = require('./models/quizModel');

router.get('/quizzes', function (req, res) {
    Quiz.find({}).exec(function (err, quizzes) {
        if (err) res.status(500).send(err);
        else res.send(quizzes);
    });
})

module.exports = router;