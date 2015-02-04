var http = require('http');

//A wrapper around http requests for the server.
module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    http.get('http://localhost:8080' + url, function(res) {
      var result = '';

      res.on('data', function(chunk) {
        result += chunk;
      });

      res.on('end', function() {
        resolve(result);
      });
    }).on('error', reject);
  });
};
