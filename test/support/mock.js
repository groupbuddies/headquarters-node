'use strict';

var Constants = require('../../dist/constants');
var Nock = require('nock');

var defaultToken = 'STUB TOKEN';
var defaultMembers = [1, 2, 3, 4];

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

function mockGithubPullRequest() {
  nock().filteringPath(/q\=.*/, 'q=query')
    .get(Constants.Github.APIPullRequestPath + '?q=query')
    .reply(200, []);
}

global.Mock = {
  accessToken: mockAccessToken,
  members: mockMembers,
  membersSearch: mockMembersSearch,
  email: mockEmail,
  githubPullRequests: mockGithubPullRequest
};
