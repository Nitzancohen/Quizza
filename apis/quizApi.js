const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');

router.get('/quizzes', function (req, res) {
    Quiz.find({}, 'title desc').exec(function (err, quizzes) {
        if (err) res.status(500).send(err);
        else res.send(quizzes);
    });
})

router.get('/quiz/:id', function (req, res) {
    Quiz.findById(req.params.id).exec(function (err, quiz) {
        if (err) res.status(500).send(err);
        else res.send(quiz);
    })
})

module.exports = router;