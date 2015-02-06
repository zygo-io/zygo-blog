import request from './client-http';

export function handler(context) {
  //If we don't have children, move to index route.
  if (context.loadingRequest.routes.length === 1)
    return { redirect: '/post/index' };

  //Already cached the thumbs.
  if (context.thumbs) return;

  return request('/db/thumbs')
    .then((response) => {
      context.thumbs = JSON.parse(response)
      context.meta.title = "Zygo Blog";
    });
}
