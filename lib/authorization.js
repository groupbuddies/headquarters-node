var Q = require('q');
var R = require('ramda');

module.exports = function(userOptions) {
  var settings = parseUserOptions(userOptions);
  var accessToken;

  var HQOauth = require('../lib/hq_oauth')(settings);

  function saveAccessToken(token) {
    accessToken = token;
    return token
  }

  function getAccessToken() {
    if (accessToken)
      Q.when(accessToken);
    else
      Q.reject(accessToken);
  }

  function parseUserOptions(options) {
    return {
      site: options.apiBase,
      clientID: options.clientID,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackURL
    };
  }

  return {
    redirectURL: HQOauth.get.redirectURL,
    setCode: R.pPipe(HQOauth.set.code, saveAccessToken),
    getAccessToken: getAccessToken
  };
};
