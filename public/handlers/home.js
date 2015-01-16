export default function(state, route) {
  return Promise.resolve({
    component: 'app/home.jsx!',
    title: 'Home'
  });
}
