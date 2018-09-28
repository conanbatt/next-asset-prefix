const routes = require('next-routes');

module.exports = routes()
  .add('dynamic', '/subpath/:id/dynamic', '/dynamic')
