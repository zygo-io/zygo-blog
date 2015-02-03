//Mock database. Loads in the pages directory files, parses them and sets various
// properties that need to be set.
var marked = require('marked');
var path = require('path');
var fs = require('fs');

/*
A list of post objects, ordered by date - latest first.
Post object follows:
{
  author: String
  author_image: String URL
  date: Date
  category: String
  title: String
  subtitle: String
  post: String MD
  id: String
}
*/
var db = [];

//Middleware function to host this as a rest api
var postsRegex = /\/db\/posts\/?/;
var postRegex = /\/db\/post\/(.*)/;
var thumbsRegex = /\/db\/thumbs\/?/;
var thumbRegex = /\/db\/thumb\/(.*)/;
function middleware(req, res, next) {
  if (req.url.match(postsRegex)) return respondWith(getPosts());
  if (req.url.match(thumbsRegex)) return respondWith(getThumbs());
  if (req.url.match(postRegex) || req.url.match(thumbRegex)) {
    var match = req.url.match(postRegex) || req.url.match(thumbRegex);
    var id = match[1];

    return respondWith(
      (req.url.match(postRegex) ? getPosts() : getThumbs())
        .filter(function(obj) {
          return obj.id === id;
        })
    );
  }

  //no matches, call next middleware.
  next();

  //returns given values
  function respondWith(val) {
    res.write(JSON.stringify(val));
    res.end();
  }
}

//Repopulate database
function populate(callback) {
  fs.readdir('public/posts', function(error, files) {
    if (error) return callback(error);

    tmpdb = [];
    files.map(function(file) {
      var buffer = fs.readFileSync(path.resolve('public/posts', file), 'utf-8');
      var post = parsePost(buffer);
      addPost(post, tmpdb);
    });

    db = tmpdb;
    callback();
  });
}

//Populate db every so often.
populate(function() {});
setInterval(function() {
  populate(function(error) {
    if (error) return console.log("Error populating database.");
    console.log("Database repopulated.");
  });
}, 10000);

//Parse post from given buffer.
function parsePost(buffer) {
  //TODO: not so robust?
  //The metadata is contained in the first two # # tags.
  var meta = buffer.match(/---[\s\S]*?---/)[0];
  buffer = buffer.substr(meta.length);
  meta = meta.substr(3, meta.length-6);
  meta = parseMeta(meta.trim());

  meta.date = new Date(meta.date);
  meta.post = marked(buffer);
  meta.thumb = "This is a temporary mock of the text blah blah lorem ipsum to be done..."; //TODO
  return meta;
}

//Parse meta-data in standard markdown form.
//e.g. : https://raw.githubusercontent.com/6to5/6to5.github.io/master/docs/compare.md
function parseMeta(meta) {
  var result = {};

  var lines = meta.split('\n');
  lines.map(function(line) {
    var keyval = line.split(':');
    result[ keyval[0].trim() ] = keyval[1].trim();
  });

  return result;
}

//Add given post to db
function addPost(post, db) {
  db.push(post);
  db.sort(function(a, b) {
    return a.date < b.date;
  });
}

//Get latest n or all of the posts.
function getPosts(n) {
  n = n || db.length;
  return db.slice(0, n);
}
//Get the list of thumbs

function getThumbs(n) {
  return getPosts(n)
    .map(toThumb);
}

function toThumb(post) {
  return {
    id: post.id,
    thumb: post.thumb,
    title: post.title,
    author: post.author,
    author_img: post.author_img,
    date: post.date.toDateString(),
    category: post.category
  };
}

module.exports = {
  middleware: middleware,
  getThumbs: getThumbs,
  getPosts: getPosts
};
