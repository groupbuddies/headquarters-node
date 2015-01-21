"use strict";

var nock = require('nock');

global.stubAccessToken = function(accessToken) {
  nock('http://hq.groupbuddies.com/admin')
    .post('/oauth/token')
    .reply(200, {
      access_token: accessToken,
      token_type: 'bearer',
      expires_in: 7200
    });
};
