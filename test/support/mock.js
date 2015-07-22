'use strict';

var Constants = require('../../dist/constants');
var Nock = require('nock');

var defaultToken = 'STUB TOKEN';
var defaultMembers = [1, 2, 3, 4];
var defaultMe = {
  name: 'Gabriel Poça',
  email: 'gabriel@groupbuddies.com'
};

function nock(baseURL) {
  baseURL = baseURL || Constants.APIBaseURL;

  return Nock(baseURL);
}

function mockMembers(members) {
  members = members || defaultMembers;

  nock().get(Constants.APIMembersPath)
    .reply(200, members);

  return members;
}

function mockMembersSearch(response) {
  response = response || defaultMembers;

  nock().filteringPath(/q\=.*/, 'q=query')
    .get(Constants.APIMembersPath + '?q=query')
    .reply(200, response);

  return response;
}

function mockMe(response) {
  response = response || defaultMe;

  nock().get('/me')
    .reply(200, response);

  return response;
}

function mockAccessToken(token) {
  token = token || defaultToken;

  nock().post('/oauth/token')
    .reply(200, {
      access_token: token,
      token_type: 'bearer',
      expires_in: 7200
    });

  return token;
}

function mockEmail() {
  nock().post(Constants.APIEmailPath)
    .reply(200);
}

function mockInvalidEmail() {
  nock().post(Constants.APIEmailPath)
    .reply(200, "invalid json response");
}

function mockGithubPullRequest() {
  nock().filteringPath(/q\=.*/, 'q=query')
    .get(Constants.Github.APIPullRequestPath + '?q=query')
    .reply(200, []);
}

global.Mock = {
  accessToken: mockAccessToken,
  members: mockMembers,
  membersSearch: mockMembersSearch,
  me: mockMe,
  email: mockEmail,
  invalidEmail: mockInvalidEmail,
  githubPullRequests: mockGithubPullRequest
};
