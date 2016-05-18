'use strict';

var fs = require('fs');
var path = require('path');
// var feed = require("feed-read");
 





exports.redirect = function(req,res,next) {
  fs.readFile(path.join(__dirname + '/../../pub/index.html'), 'utf-8', function(err, data) {
    res.send(data);
  });
};

exports.post_api = function(req,res,next) {
  //console.log(req.data);
  // if(req.data.cursor);
  fs.readFile(path.join(__dirname + '/../data/db/post_body'), 'utf-8', function(err, data) {
    console.log(err,data);
    res.status(200).send(JSON.stringify({
      title: 'Response from server...',
      author: 'L. M. Welinder',
      url_slug: 'random_postname',
      published: new Date(),
      content: data
    }));
  });
};

module.exports;

// feed('http://lithic.io/feed/',function(err, data){
//     res.type('utf-8')
//     res.status(200).send(JSON.stringify(data));
//   });