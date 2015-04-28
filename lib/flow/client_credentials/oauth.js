var Q = require('q');
var Oauth = require('simple-oauth2');
var R = require('ramda');
var Constants = require('../../constants');

var ALLOWED_KEYS = [
  'site',
  'clientID',
  'clientSecret'
];

function validSettings(settings) {
  return R.all(R.flip(R.prop)(settings), ALLOWED_KEYS);
}

module.exports = function(settings) {
  settings = R.pickAll(ALLOWED_KEYS, settings);
  settings.site = Constants.APIBaseURL;

  if (!validSettings(settings))
    throw new Error('Invalid settings provided. ' +
        `Please make sure you have [${ALLOWED_KEYS.join(', ')}]`);

  var oauth = Oauth(settings);

  return {
    accessToken: function() {
      var deferred = Q.defer();
      oauth.client.getToken({}, deferred.makeNodeResolver());
      return deferred.promise;
    }
  };
};
