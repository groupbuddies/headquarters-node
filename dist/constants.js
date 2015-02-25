"use strict";

var APIBaseURL = "https://hq.groupbuddies.com";
var APIMembersPath = "/members";
var APIEmailPath = "/emails";
var APITokenPath = "/oauth/authorize";

var Constants = {
  APIBaseURL: APIBaseURL,
  APITokenPath: APITokenPath,
  APITokenURL: APIBaseURL + APITokenPath,
  APIMembersPath: APIMembersPath,
  APIMembersURL: APIBaseURL + APIMembersPath,
  APIEmailPath: APIEmailPath,
  APIEmailURL: APIBaseURL + APIEmailPath
};

module.exports = Constants;