export default function(state) {
  return Promise.resolve().then(function() {
    return {
      component: 'lib/two.jsx!',
      title: 'Page Two'
    };
  });
}
