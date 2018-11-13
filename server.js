const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const quizApi = require('./apis/quizApi');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/quizza', () => {
    console.log('Connection to DB established');
});

app.use(function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*')
 res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
 res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
 next();
});

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(quizApi);

app.listen(SERVER_PORT, () => {
    console.log(`Server started on port ${SERVER_PORT}`)
});