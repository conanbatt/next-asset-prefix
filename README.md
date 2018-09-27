## Issue

Wanting to make this app work in dev/prod with an assetPrefix setup for static assets on the same app.

Minimal setup in server.js

```
  app.setAssetPrefix('/subpath');

  server.use('/', (req, res) => {
    const { path } = req;
    handle(req, res);
  });
```

Go to localhost:4444/subpath/noNextAssets and confirm app tries to fetch from /subpath/_next/ which does not exist.

Desired solution: _next assets load with the subpath included. And Links href/prefetch work with the full path.
