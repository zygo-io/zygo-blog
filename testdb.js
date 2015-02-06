var getMiddleware = require('./database');
console.log(getMiddleware);
module.exports.middleware = getMiddleware('public/posts');
