"use strict";

var Authorization = require("./api/authorization");
var Member = require("./member");
var Constants = require("./constants");
var Request = require("./request");

module.exports = function (options) {
  var authorization = Authorization(options);
  var member = Member(authorization);

  return {
    redirectURL: authorization.redirectURL,
    accessToken: authorization.accessToken,
    setCode: authorization.setCode,

    member: member,
    Constants: Constants
  };
};