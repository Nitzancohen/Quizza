const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/user/:name', function (req, res) {
    User.findOne({userName: req.params.name}).exec(function (err, user) {
        if (err) res.status(500).send(err);
        else if(user) res.send(user);
        else User.create({userName: req.params.name, quizzes: []}).exec(function (err, user) {
            if (err) res.status(500).send(err);
            else res.send(user);
        })
    })
})

module.exports = router;