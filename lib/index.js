var Authorization = require('./authorization');
var Member = require('./member');

module.exports = function(options) {
  var authorization = Authorization(options);

  return {
    redirectURL: authorization.redirectURL,

    setCode: authorization.setCode,

    Member: Member
  };
};
