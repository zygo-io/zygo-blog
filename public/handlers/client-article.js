import request from './client-http';

export function handler(context) {
  var id = context.loadingRequest.options.id;

  //Post already cached?
  context.posts = context.posts || {};
  if (context.posts[id]) return;

  return request('/db/post/' + id)
    .then((response) => {
      context.posts[id] = JSON.parse(response);
      context.meta.title = context.posts[id].title;
    });
}
