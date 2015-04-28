var Authorization = require('./authorization');

var Member = require('../../member');
var Email = require('../../email');
var Constants = require('../../constants');
var Github = require('../../github');

module.exports = function(options) {
  var authorization = Authorization(options);
  var member = Member(authorization);
  var email = Email(authorization);
  var github = Github(authorization);

  return {
    accessToken: authorization.accessToken,

    member: member,
    email: email,
    github: github,
    Constants: Constants
  };
};
