import request from './client-http';

export function handler(context) {
  var id = context.loadRoute.pid;
  context.posts = context.posts || {};

  return Promise.resolve()
    .then(() => {
      //don't load an already cached post
      if (context.posts[id]) return;

      return request('/db/post/' + id)
        .then((response) => {
          context.posts[id] = JSON.parse(response) || {};
          context.meta.title = context.posts[id].title;
        });
    })
    .then(() => request('/db/next/thumb/' + id))
    .then((response) => context.nextThumb = JSON.parse(response));
}
