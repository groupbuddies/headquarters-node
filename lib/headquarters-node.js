var Authorization = require('./authorization');
var Member = require('./member');

module.exports = function(options) {
  var authorization = Authorization(options);

  return {
    redirectURL: authorization.redirectURL,
    accessToken: authorization.accessToken,
    setCode: authorization.setCode,

    Member: Member
  };
};
