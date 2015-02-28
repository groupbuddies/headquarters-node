"use strict";

var Request = require("./request");
var Constants = require("./constants");

module.exports = function (authorization) {
  var request = Request(authorization);

  return {
    all: function () {
      return request.get(Constants.APIMembersURL);
    },
    search: function (query) {
      return request.get(Constants.APIMembersURL + ("?q=" + query));
    },
    me: function () {
      return request.get(Constants.APIMeURL);
    }
  };
};