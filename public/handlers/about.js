export function handler(state, route) {
  return Promise.resolve({
    title: 'About'
  });
}

export var component = 'app/about.jsx!';
