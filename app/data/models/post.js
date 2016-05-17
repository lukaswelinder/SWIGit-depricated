var db = require('../config');
var Promise = require('bluebird');

var Post = db.Model.extend({
  tableName: 'posts',
  links: function() {
    return this.hasMany(Link);
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      //dostuff
    },this);
  },
  getPost: function(pass) {
    return bcrypt.hash(pass);
  }
});
// new Post({username: 'username', password: 'password'});
module.exports = Post;