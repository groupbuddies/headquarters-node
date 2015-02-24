"use strict";

var Q = require("q");
var R = require("ramda");
var Request = require("request");
var Constants = require("./constants");
var Authorization = require("./api/authorization");

var baseURL = Constants.APIBaseURL;

var requestOptions = R.curry(function (method, token, url) {
  return {
    url: url,
    method: method,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "v2"
    }
  };
});

module.exports = {
  get: function (url) {
    var deferred = Q.defer();
    var accessToken = Authorization.accessToken();

    var options = requestOptions("GET", accessToken, url);

    Request.get(options, function (err, respons, body) {
      if (err) deferred.reject(err);else deferred.resolve(body);
    });

    return deferred.promise;
  }
};