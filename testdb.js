var getMiddleware = require('./database');
module.exports.middleware = getMiddleware('public/posts');
