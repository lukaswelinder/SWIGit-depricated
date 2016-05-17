var path = require('path');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'swigit',
    password: '$WIG!t.lithic.io', // TODO: secure db redentials
    database: 'swigit',
    charset: 'utf8',
    filename: path.join(__dirname, './db/._swigit.sql')
  }
});

db.schema.hasTable('posts').then(function(exists) {
  if (!exists) {
    db.schema.createTable('urls', function (link) {
      link.increments('id').primary();
      link.string('url_slug', 128);
      link.string('file_path', 128);
      link.string('category', 64); // shortened redirect path
      link.string('title', 64); // title fetched from site
      link.string('author', 64);
      link.integer('visits');
      link.timestamps(); // ?
    }).then(function (table) {
      console.log('Created urls table');
    });
  }
});

var Bookshelf = require('bookshelf')(db);
module.exports = Bookshelf;