import {request} from './data-request';

/*
 * Article handler
 * From curRoute.pid route context, populates context data:
 *  - posts[pid]
 *  - readNext
 */

export function handler(context) {
  var id = context.curRoute.pid;
  context.posts = context.posts || {};

  return Promise.all([
    request(context.db_server + '/db/post/' + id),
    request(context.db_server + '/db/next/thumb/' + id)
  ])
  .then(function(responses) {
    context.posts[id] = responses[0];
    context.nextArticle = responses[1];

    // set the page title
    context.meta.title = context.posts[id].title;
  });
}