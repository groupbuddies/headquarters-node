"use strict";

var Q = require("q");
var Oauth = require("simple-oauth2");
var R = require("ramda");
var Constants = require("../constants");

var ALLOWED_KEYS = ["site", "clientID", "clientSecret", "callbackURL"];

function validSettings(settings) {
  return R.all(R.flip(R.prop)(settings), ALLOWED_KEYS);
}

module.exports = function (settings) {
  var settings = R.pickAll(ALLOWED_KEYS, settings);
  settings.site = Constants.APIBaseURL;

  if (!validSettings(settings)) throw new Error("Invalid settings provided. Please make sure you have [" + ALLOWED_KEYS.join(", ") + "]");

  var oauth = Oauth(R.omit("callbackURL", settings));
  var callbackURL = settings.callbackURL;

  function redirectURL() {
    var url = oauth.authCode.authorizeURL({
      redirect_uri: callbackURL
    });

    return Q(url);
  };

  function setCode(code) {
    var deferred = Q.defer();

    oauth.authCode.getToken({
      code: code,
      redirect_uri: callbackURL
    }, resolve);

    function resolve(err, result) {
      if (err) {
        deferred.reject(err);
      } else {
        var accessToken = oauth.accessToken.create(result).token.access_token;
        deferred.resolve(accessToken);
      }
    }

    return deferred.promise;
  };

  return {
    redirectURL: redirectURL,
    setCode: setCode
  };
};