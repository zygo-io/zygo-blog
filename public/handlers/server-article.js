var http = require('http');

module.exports.handler = function(context) {
  var id = context.loadingRequest.options.id;

  //load the post corresponding to the id
  return new Promise(function(resolve, reject) {
    context.posts = {};

    var options = {
      host: 'localhost',
      path: '/db/post/' + id,
      port: 8080
    };

    http.request(options, function(res) {
      var json = '';
      res.on('data', function(chunk) {
        json += chunk;
      });

      res.on('end', function() {
        //TODO this is passed an array. This doesn't make a whole lot of sense. Fix this.
        context.posts[id] = JSON.parse(json);
        context.meta.title = context.posts[id][0].title;
        resolve();
      });
    }).end();
  });
};