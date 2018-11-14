const express = require('express');
const router = express.Router();
const Uer = require('../models/userModel');

router.get('/user/:name', function (req, res) {
    Quiz.findOne({userName: req.params.name}).populate('quizzes').exec(function (err, user) {
        if (err) res.status(500).send(err);
        else res.send(user);
    })
})

module.exports = router;