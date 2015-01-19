export function handler(state, route) {
  return Promise.resolve({
    title: 'Post #' + route.options.id
  });
}

export var component = 'app/post.jsx!';
