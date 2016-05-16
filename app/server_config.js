'use strict';

var express = require('express');
var partials = require('express-partials'); //install
var session = require('express-session'); //install
var bodyParser = require('body-parser'); //install

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../pub'));
// app.use(session({
//   secret: 'SWIGit@pp$ecret',
//   resave: false,
//   saveUninitialized: true
// }));
// app.get('*');
module.exports = app;