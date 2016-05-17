'use strict';

var express = require('express');
var partials = require('express-partials'); //install
var session = require('express-session'); //install
var bodyParser = require('body-parser'); //install

var route = require('./http/route');



var app = express();

app.use(partials());
app.use(bodyParser.json());
// app.use(session({
//   secret: 'SWIGit@pp$ecret',
//   resave: false,
//   saveUninitialized: true
// }));
app.use(express.static(__dirname + '/../pub'));
app.get('/_api/posts', route.post_data);
app.get('/*', route.redirect);
module.exports = app;