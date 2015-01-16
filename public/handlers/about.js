export default function(state, route) {
  return Promise.resolve({
    component: 'app/about.jsx!',
    title: 'About'
  });
}
