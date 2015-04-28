/*globals Headquarters, Settings, R, Mock */

'use strict';

describe('Headquarters: Client Credentials Flow', function() {
  it('should throw an error if some settings are missing', function(done) {
    function initialize() {
      Headquarters(R.omit(Settings.clientCredentials, 'clientID'));
    }

    expect(initialize).to.throw(Error);
    done();
  });
});

describe('Headquarters: Client Credentials Flow', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings.clientCredentials);
  });

  it('should return the access token', function() {
    var accessToken = Mock.accessToken();

    function requestAccessToken() {
      return headquarters.accessToken();
    }

    return requestAccessToken()
      .should
      .eventually
      .equal(accessToken);
  });
});
