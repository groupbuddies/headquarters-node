"use strict";

var Request = require("./request");
var Constants = require("./constants");

module.exports = function (authorization) {
  var request = Request(authorization);

  return {
    pullRequests: function (query) {
      return request.get(Constants.Github.APIPullRequestURL + ("?q=" + query));
    }
  };
};