"use strict";

var Request = require("./request");
var Constants = require("./constants");

module.exports = function (authorization) {
  var request = Request(authorization);

  return {
    send: function (body) {
      return request.post(Constants.APIEmailURL, body);
    }
  };
};