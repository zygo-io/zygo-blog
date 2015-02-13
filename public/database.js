//Mock database. Loads in the pages directory files, parses them and sets various
// properties that need to be set.
import marked from 'marked';
import path from 'path';
import fs from 'fs';
import prism from 'prism';

marked.setOptions({
  highlight(code, lang) {
    try {
      return prism.highlight(code, prism.languages[lang], lang);
    } catch(err) {
      console.log("Error syntax highlighting: " + err);
    }
  }
});

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
var isPopulated = false;
var db = [];

//Middleware function to host this as a rest api
var postsRegex = /\/db\/posts\/?/;
var postRegex = /\/db\/post\/(.*)/;
var thumbsRegex = /\/db\/thumbs\/?/;
var thumbRegex = /\/db\/thumb\/(.*)/;
var nextThumbRegex = /\/db\/next\/thumb\/(.*)/;
var match;

//Given a directory to read posts from, returns a middleware function.
export function middleware(req, res, next, config) {
  //Populate database if not cached.
  if (!isPopulated)
    populate(path.resolve(config.postsDir), function(error) {
      if (error) return console.log("Error populating database.");
      console.log("Database repopulated.");

      isPopulated = true;
    });

  //Get all thumb/posts.
  if (match = req.url.match(postsRegex)) return respondWith(getPosts());
  if (match = req.url.match(thumbsRegex)) return respondWith(getThumbs());
  if (match = req.url.match(postRegex)) return respondWith(getPost(match[1]));
  if (match = req.url.match(thumbRegex)) return respondWith(getThumb(match[1]));
  if (match = req.url.match(nextThumbRegex)) return respondWith(getNextThumb(match[1]));

  //no matches, call next middleware.
  next();

  //wrapper to return given value to client
  function respondWith(val) {
    res.write(JSON.stringify(val));
    res.end();
  }
}

//Repopulate database
function populate(postDir, callback) {
  fs.readdir(postDir, function(error, files) {
    if (error) return callback(error);

    var tmpdb = [];
    files.forEach((file) => {
      var buffer = fs.readFileSync(path.resolve(postDir, file), 'utf-8');
      var post = parsePost(buffer);
      addPost(post, tmpdb);
    });

    db = tmpdb;
    callback();
  });
}

//Parse post from given buffer.
function parsePost(buffer) {
  //The metadata is contained in the first two # # tags.
  var meta = buffer.match(/---[\s\S]*?---/)[0];
  buffer = buffer.substr(meta.length);
  meta = meta.substr(3, meta.length-6);
  meta = parseMeta(meta.trim());

  meta.date = new Date(meta.date);
  meta.post = marked(buffer);
  return meta;
}

//Parse meta-data in standard markdown form.
//e.g. : https://raw.githubusercontent.com/6to5/6to5.github.io/master/docs/compare.md
function parseMeta(meta) {
  var result = {};

  var lines = meta.split('\n');
  lines.forEach((line) => {
    var keyval = line.split(':');
    result[ keyval[0].trim() ] = keyval.slice(1).join(':').trim();
  });

  return result;
}

//Add given post to db
function addPost(post, db) {
  db.push(post);
  db.sort((a, b) => a.date < b.date);
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

//Convert a post to a thumb.
function toThumb(post) {
  return {
    id: post.id, 
    thumb: post.thumb, 
    title: post.title, 
    author: post.author, 
    category: post.category,
    author_img: post.author_img, 
    date: post.date.toDateString(),
    url: '/' + (post.category ? post.category + '/' : '') + post.id
  };
}

//Get post with given id, or undefined.
function getPost(id) {
  var posts = getPosts().filter((post) => post.id === id );
  return posts[0] || null;
}

//Get thumb with given id.
function getThumb(id) {
  var post = getPost(id);
  return post ? toThumb(post) : null;
}

//Get next thumb in same category as given id.
function getNextThumb(id) {
  var currentThumb = getThumb(id);
  if (currentThumb) {
    var thumbs = getThumbs().filter((thumb) => thumb.category === currentThumb.category );

    var index = indexOf(thumbs, currentThumb.id);
    if (index < 0 || !thumbs[index+1]) return null;

    return thumbs[index+1];
  } else
    return null;
}

//indexOf but matching on id.
function indexOf(array, id) {
  for (var i = 0; i < array.length; i++)
    if (array[i].id === id) return i;
  return -1;
}
