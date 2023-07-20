const jsonServer = require('json-server');

var server       = jsonServer.create();
var router       = jsonServer.router(require('./db.js')());
var middlewares  = jsonServer.defaults();

server.use(jsonServer.rewriter({
  '/api/:resource': '/:resource',
  '/api/:resource/:id': '/:resource/:id',
}));

router.render = function (req, res) {
  res.jsonp({
    data: res.locals.data
  })
};

server.use(middlewares);
server.use(router);

server.listen(3000, function () {
  console.log('JSON Server is running')
})
