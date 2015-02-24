'use strict';

var Constants = require('../../dist/constants');
var nock = require('nock')(Constants.APIBaseURL);

var defaultToken = 'STUB TOKEN';
var defaultMembers = [1, 2, 3, 4];

function mockMembers(members) {
  members = members || defaultMembers;

  nock.get(Constants.APIMembersPath)
    .reply(200, members);

  return members;
}

function mockAccessToken(token) {
  token = token || defaultToken;

  nock.post('/oauth/token')
    .reply(200, {
      access_token: token,
      token_type: 'bearer',
      expires_in: 7200
    });

  return token;
}

global.Mock = {
  accessToken: mockAccessToken,
  members: mockMembers
};
