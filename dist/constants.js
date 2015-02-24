"use strict";

var APIBaseURL = "https://hq.groupbuddies.com";
var APIMembersPath = "/members";

var Constants = {
  APIBaseURL: APIBaseURL,
  APITokenPath: "/oauth/authorize",
  APIMembersPath: APIMembersPath,
  APIMembersURL: APIBaseURL + APIMembersPath
};

module.exports = Constants;