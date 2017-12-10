const serverAssets = require('express').static;

const routerApi = require('./api.router.js');
const routerApp = require('./app.router.js');

const errorMiddleware = require('./../middlewares/error.middleware.js');


module.exports.init = (app, path) => {

  // Set static path
  app.use('/assets', serverAssets(`${path}/assets`));

  // Set routers
  app.use('/', routerApp, errorMiddleware.app);
  app.use('/api', routerApi, errorMiddleware.api);

  // Set default route
  app.use('*', (req, res, next) => {
    res.send('Default route');
    next();
  });
};