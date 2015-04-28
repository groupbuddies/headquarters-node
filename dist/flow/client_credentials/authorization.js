"use strict";

var Oauth = require("./oauth");
var Q = require("q");
var R = require("ramda");

module.exports = function (options) {
  var token, oauth;

  initialize(options);

  return {
    accessToken: accessToken
  };

  function initialize(options) {
    oauth = Oauth(parseUserOptions(options));
  }

  function parseUserOptions(options) {
    return {
      clientID: options.clientID,
      clientSecret: options.clientSecret
    };
  }

  function saveAccessToken(newToken) {
    token = newToken.access_token;
    return token;
  }

  function accessToken() {
    var newToken = arguments[0] === undefined ? undefined : arguments[0];
    if (R.is(String, newToken)) {
      return saveAccessToken({ access_token: newToken });
    } else if (R.is(Object, newToken)) {
      return saveAccessToken(newToken);
    }if (token) {
      return Q(token);
    } else {
      return oauth.accessToken().then(saveAccessToken);
    }
  }
};