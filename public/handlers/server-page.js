var request = require('./server-http');

//Grab the thumbs data for the page.
module.exports.handler = function(context) {
  return request('/db/thumbs')
    .then(function(response) {
      context.thumbs = JSON.parse(response);
      context.meta.title = "Zygo Blog";
    });
};
