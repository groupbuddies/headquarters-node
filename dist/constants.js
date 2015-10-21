"use strict";

var APIBaseURL = "https://hq.subvisual.co";
var APIMembersPath = "/members";
var APIEmailPath = "/emails";
var APITokenPath = "/oauth/authorize";
var APIMePath = "/me";

var Github = {
  APIPullRequestPath: "/github/pull_requests"
};

var Constants = {
  APIBaseURL: APIBaseURL,
  APITokenPath: APITokenPath,
  APITokenURL: APIBaseURL + APITokenPath,
  APIMembersPath: APIMembersPath,
  APIMembersURL: APIBaseURL + APIMembersPath,
  APIEmailPath: APIEmailPath,
  APIEmailURL: APIBaseURL + APIEmailPath,
  APIMePath: APIMePath,
  APIMeURL: APIBaseURL + APIMePath,
  Github: {
    APIPullRequestPath: Github.APIPullRequestPath,
    APIPullRequestURL: APIBaseURL + Github.APIPullRequestPath
  }
};

module.exports = Constants;