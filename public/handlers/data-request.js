import http from 'http';

export function request(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(res) {
      var chunks = [];
      res.on('data', function(chunk) {
        chunks.push(chunk);
      });
      res.on('end', function() {
        resolve(chunks.join(''));
      })
    }).on('error', reject);
  })
  .then(function(data) {
    return JSON.parse(data);
  });
}