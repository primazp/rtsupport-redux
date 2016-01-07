var Redux = require('redux');
var reducer = require('./reducer');
var Middleware = require('./middleware');

function makeStore() {
  var createStoreWithMiddleware = Redux.applyMiddleware(
    Middleware.logger
  )(Redux.createStore)
  return createStoreWithMiddleware(reducer);
}

module.exports = makeStore;
