var Q = require('q');
var Oauth = require('simple-oauth2');
var R = require('ramda');

var redirectURL = R.curry(function(oauth, callbackURL) {
  var url = oauth.authCode.authorizeURL({
    redirect_uri: callbackURL
  })

  return Q(url);
});

var setCode = R.curry(function(oauth, callbackURL, code) {
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
});

module.exports = function(settings) {
  var oauth = Oauth(R.omit('callbackURL', settings));
  var callbackURL = settings.callbackURL;

  return {
    get: {
      redirectURL: redirectURL(oauth)
    },

    set: {
      code: setCode(oauth, callbackURL)
    }
  };
};
