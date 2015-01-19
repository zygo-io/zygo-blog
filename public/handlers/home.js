export function handler(state, route) {
  return Promise.resolve({
    title: 'Home'
  });
}

export var component = 'app/home.jsx!';
