var Middleware = {
  logger: function() {
	  return function (store) {
	    return function (next) {
	      return function (action) {
          console.log('action: ', action);
          var result = next(action)
          console.log('next state: ', result);
          return result;
	      };
	    };
	  };
  }
}

module.exports = Middleware;
