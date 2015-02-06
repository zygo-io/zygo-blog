var request = require('./server-http');

module.exports.handler = function(context) {
  var id = context.loadingRequest.options.pid;
  context.posts = context.posts || {};

  return request('/db/post/' + id)
    .then(function(response) {
      context.posts[id] = JSON.parse(response) || {};
      context.meta.title = context.posts[id].title;
    })
    .then(function() {
      return request('/db/next/thumb/' + id);
    })
    .then(function(response) {
      context.nextThumb = JSON.parse(response);
    });
};
