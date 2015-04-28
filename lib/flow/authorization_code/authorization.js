var R = require('ramda');
var Q = require('q');

module.exports = function(options) {
  var settings, token, HQOauth;

  initialize(options);

  return {
    accessToken: accessToken,
    redirectURL: redirectURL,
    setCode: R.pPipe(setCode, R.tap(saveAccessToken)),
  };

  function initialize(options) {
    settings = parseUserOptions(options);
    HQOauth = require('./oauth')(settings);
  }

  function parseUserOptions(options) {
    return {
      clientID: options.clientID,
      clientSecret: options.clientSecret,
      callbackURL: options.callbackURL
    };
  }

  function saveAccessToken(newToken) {
    token = newToken;
  }

  function accessToken(newToken = undefined) {
    if (newToken)
      saveAccessToken(newToken);
    return Q(token);
  }

  function redirectURL() {
    return HQOauth.redirectURL();
  }

  function setCode(code) {
    return HQOauth.setCode(code);
  }
};
