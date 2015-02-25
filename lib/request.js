var Q = require('q');
var R = require('ramda');
var Request = require('request');
var Constants = require('./constants');

var baseURL = Constants.APIBaseURL;

var requestOptions = (method, token, url, form = '') => {
  return {
    url: url,
    method: method,
    headers:  {
      Authorization: 'Bearer ' + token,
      Accept: 'v2'
    },
    form: form
  };
};

var resolveResponse = R.curry((deferred, err, response, body) => {
  if (err) {
    deferred.reject(err);
  } else {
    var parsedBody;

    if (body)
      parsedBody = JSON.parse(body)

    deferred.resolve(parsedBody);
  }
});

module.exports = function(authorization) {
  return {
    get: (url) => {
      var deferred = Q.defer();
      var accessToken = authorization.accessToken();

      var options = requestOptions('GET', accessToken, url);

      Request.get(options, resolveResponse(deferred));

      return deferred.promise;
    },
    post: (url, body) => {
      var deferred = Q.defer();
      var accessToken = authorization.accessToken();

      var options = requestOptions('POST', accessToken, url, body);

      Request.post(options, resolveResponse(deferred));

      return deferred.promise;
    }
  }
};
