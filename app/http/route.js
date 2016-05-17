var fs = require('fs');
var path = require('path');

exports.redirect = function(req,res,next) {
  fs.readFile(path.join(__dirname + '/../../pub/index.html'), 'utf-8', function(err, data) {
    res.send(data);
  });
};

exports.post_data = function(req,res,next) {
  console.log(req.body);
  res.send(200,req.body);
  // fs.readFile(path.join(__dirname + '/../../pub/index.html'), 'utf-8', function(err, data) {
  //   res.send(data);
  // });
};

module.exports;