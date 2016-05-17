var db = require('../config');
var Link = require('../models/post');

var Links = new db.Collection();

Posts.model = Link;

module.exports = Links;