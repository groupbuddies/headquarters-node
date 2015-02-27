"use strict";

var Authorization = require("./api/authorization");
var Member = require("./member");
var Email = require("./email");
var Constants = require("./constants");
var Request = require("./request");
var Github = require("./github");

module.exports = function (options) {
  var authorization = Authorization(options);
  var member = Member(authorization);
  var email = Email(authorization);
  var github = Github(authorization);

  return {
    redirectURL: authorization.redirectURL,
    accessToken: authorization.accessToken,
    setCode: authorization.setCode,

    member: member,
    email: email,
    github: github,
    Constants: Constants
  };
};