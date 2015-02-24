"use strict";

var Q = require("q");
var R = require("ramda");
var Request = require("request");
var Constants = require("./constants");

var baseURL = Constants.APIBaseURL;

function requestOptions(method, token, url) {
  return {
    url: url,
    method: method,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "v2"
    }
  };
}

module.exports = function (authorization) {
  return {
    get: function (url) {
      var deferred = Q.defer();
      var accessToken = authorization.accessToken();

      var options = requestOptions("GET", accessToken, url);

      Request.get(options, function (err, respons, body) {
        if (err) deferred.reject(err);else deferred.resolve(body);
      });

      return deferred.promise;
    }
  };
};