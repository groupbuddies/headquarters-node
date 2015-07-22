"use strict";

var Q = require("q");
var R = require("ramda");
var Request = require("request");

var requestOptions = function (method, token, url) {
  var form = arguments[3] === undefined ? "" : arguments[3];
  return {
    url: url,
    method: method,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "v2"
    },
    form: form
  };
};

var resolveResponse = R.curry(function (deferred, err, response, body) {
  if (err) {
    deferred.reject(err);
  } else {
    var parsedBody;

    try {
      if (body && body !== "") parsedBody = JSON.parse(body);

      deferred.resolve(parsedBody);
    } catch (e) {
      console.log(e);
      console.log(body);
      deferred.reject(e);
    }
  }
});

module.exports = function (authorization) {
  return {
    get: function (url) {
      var deferred = Q.defer();

      authorization.accessToken().then(function (accessToken) {
        var options = requestOptions("GET", accessToken, url);

        Request.get(options, resolveResponse(deferred));
      });

      return deferred.promise;
    },
    post: function (url, body) {
      var deferred = Q.defer();

      authorization.accessToken().then(function (accessToken) {
        var options = requestOptions("POST", accessToken, url, body);

        Request.post(options, resolveResponse(deferred));
      });

      return deferred.promise;
    }
  };
};