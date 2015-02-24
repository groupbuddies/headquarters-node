"use strict";

var request = require("./request");
var Constants = require("./constants");

module.exports = {
  all: function () {
    return request.get(Constants.APIMembersURL);
  }
};