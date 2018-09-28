const express = require('express');
const next = require('next');
const routes = require('./routes');

const app = next({ dev: true });

const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  // Entire site will be served under subdomain.
  // Pages are using file api, all pages under pages/subdomain/etc
  app.setAssetPrefix('/subpath');

  server.use('/subpath', (req, res) => {
    const { path } = req;
    handle(req, res);
  });

  server.get('*', (req, res) => {
    const { path } = req;
    handle(req, res);
  });

  server.listen(4444, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${4444}`);
  });
});
