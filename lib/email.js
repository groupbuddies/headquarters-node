var Request = require('./request');
var Constants = require('./constants');

module.exports = function(authorization) {
  var request = Request(authorization);

  return {
    send: (body) => {
      return request.post(Constants.APIEmailURL, body);
    }
  };
};
