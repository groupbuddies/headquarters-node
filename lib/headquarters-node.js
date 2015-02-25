var Authorization = require('./api/authorization');
var Member = require('./member');
var Email = require('./email');
var Constants = require('./constants');
var Request = require('./request');

module.exports = function(options) {
  var authorization = Authorization(options);
  var member = Member(authorization);
  var email = Email(authorization);

  return {
    redirectURL: authorization.redirectURL,
    accessToken: authorization.accessToken,
    setCode: authorization.setCode,

    member: member,
    email: email,
    Constants: Constants
  };
};
