var http = require('http');

//Grab the thumbs data for the page.
module.exports.handler = function(context) {
  return new Promise(function(resolve, reject) {
    context.thumbs = [];

    var options = {
      host: 'localhost',
      path: '/db/thumbs',
      port: 8080
    };

    http.request(options, function(res) {
      var json = '';
      res.on('data', function(chunk) {
        json += chunk;
      });

      res.on('end', function() {
        context.thumbs = JSON.parse(json);
        context.meta.title = "Zygo Blog";
        resolve();
      });
    }).end();
  });
};
