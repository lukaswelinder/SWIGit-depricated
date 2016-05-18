var fs = require('fs');
var path = require('path');
var feed = require("feed-read");
 





exports.redirect = function(req,res,next) {
  fs.readFile(path.join(__dirname + '/../../pub/index.html'), 'utf-8', function(err, data) {
    res.send(data);
  });
};

exports.post_data = function(req,res,next) {
  //console.log(req.data);

  feed('http://lithic.io/feed/',function(err, data){
    res.status(200).send(data);
  });
  
  // fs.readFile(path.join(__dirname + '/../data/db/post_body'), 'utf-8', function(err, data) {
  //   res.status(200).send(JSON.stringify({
  //     title: 'Response from server...',
  //     author: 'L. M. Welinder',
  //     url_slug: 'random-postname',
  //     date: 'May 17, 2016',
  //     body: data
  //   }));
  // });
};

module.exports;