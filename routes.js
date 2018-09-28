const routes = require('next-routes');

module.exports = routes()
  .add('dynamic', '/:id/dynamic', '/dynamic')
  //.add('dynamic', '/subpath/:id/dynamic', '/dynamic') wont match url
