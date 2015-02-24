var Request = require('./request');
var Constants = require('./constants');

module.exports = function(authorization) {
  var request = Request(authorization);

  return {
    all: () => {
      return request.get(Constants.APIMembersURL);
    }
  };
};
