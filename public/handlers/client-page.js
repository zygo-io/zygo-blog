import request from './client-http';

export function handler(context) {
  //Already cached the thumbs.
  if (context.thumbs) return;

  return request('/db/thumbs')
    .then((response) => {
      context.thumbs = JSON.parse(response)
      context.meta.title = "Zygo Blog";
    });
}
