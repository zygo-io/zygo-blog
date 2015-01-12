export default function(state) {
  return Promise.resolve().then(function() {
    return {
      component: 'lib/one.jsx!',
      title: 'Page One'
    };
  });
}
