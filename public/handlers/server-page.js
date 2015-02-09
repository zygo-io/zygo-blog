var request = require('./server-http');

//Grab the thumbs data for the page.
module.exports.handler = function(context) {
  //If we don't have children, move to index route.
  if (context.loadRoute.routes.length === 1)
    return { redirect: '/post/index' };

  return request('/db/thumbs')
    .then(function(response) {
      context.thumbs = JSON.parse(response);
      context.meta.title = "Zygo Blog";
    });
};
