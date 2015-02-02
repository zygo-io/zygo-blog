var http = require('http');

module.exports.handler = function(context) {
  var id = context.currentRequest.options.id;

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
        context.posts[id] = JSON.parse(json);
        resolve();
      });
    }).end();
  });
};
