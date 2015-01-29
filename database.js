//Mock database. Loads in the pages directory files, parses them and sets various
// properties that need to be set.
var marked = require('marked');
var path = require('path');
var fs = require('fs');

/*
A list of post objects, ordered by date - latest first.
Post object follows:
{
  date: Date
  title: String
  body: String
  thumb: String
  categories: [String]
}
*/
var db = [];

//Middleware function to host this as a rest api
var postRegex = /\/db\/posts\//;
module.exports.middleware = function(req, res, next) {
  var match = req.url.match(/\/db\/get\/([\d]+])/);

  //no matches, call next middleware.
  next();
};

//Initialize database
module.exports.initialize = function(callback) {
  fs.readdir('public/posts', function(error, files) {
    if (error) callback(error);

    files.map(function(file) {
      var buffer = fs.readFileSync(path.resolve('public/posts', file));
      var post = parsePost(file, buffer);
      addPost(post);
    });

    callback();
  });
};

//Parse post from given buffer.
function parsePost(filename, buffer) {
  //Get params from first three lines of file
  buffer = buffer.split('\n');
  var title = buffer.splice(0, 1);
  var thumb = buffer.splice(0, 1);
  var categories = buffer.splice(0, 1).split(' ');
  buffer = marked(buffer.join('\n'));

  return {
    date: newDate(filename),
    title: title,
    thumb: thumb,
    body: buffer,
    categories: categories
  };
}

//Add given post to db
function addPost(post) {
  db.push(post);
  db.sort(function(a, b) {
    return a.date < b.date;
  });
}

//Get latest n or all of the posts.
module.exports.getPosts = function(n) {
  n = n || db.size();
  return db.slice(0, n);
};

//Get the list of thumbs
module.exports.getThumbs = function(n) {
  return getPosts(n)
    .map(function(post) {
      return post.thumbs;
    });
};

//Get the list of categories
module.exports.getCategories = function(n) {
  var categories = getPosts(n)
    .reduce(function(result, post) {
      return result.concat(post.categories);
    });

  return categories
    .filter(function(x, i) {
      return i === categories.indexOf(x);
    });
};
