export default function(state, route) {
  return Promise.resolve({
    component: 'app/post.jsx!',
    title: 'Post #' + route.options.id
  });
}
