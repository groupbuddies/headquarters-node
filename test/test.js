'use strict';

describe('Headquarters', function() {
  it('should throw an error if some settings are missing', function(done) {
    function initialize() {
      Headquarters(R.omit(Settings, 'callbackURL'));
    }

    expect(initialize).to.throw(Error);
    done();
  });
});

describe('Headquarters: Authorization', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings);
  });

  it('should return a url to redirect the user', function(done) {
    headquarters.redirectURL()
      .should
      .eventually
      .equal(Settings.redirectURL)
      .notify(done);
  });

  it('should set the code', function(done) {
    var accessToken = Mock.accessToken();

    headquarters.setCode('code')
      .should
      .eventually
      .equal(accessToken)
      .notify(done);
  });

  it('should return the access token', function(done) {
    var accessToken = Mock.accessToken();

    function requestAccessToken() {
      return headquarters.accessToken();
    }

    return headquarters.setCode('code')
      .then(requestAccessToken)
      .should
      .eventually
      .equal(accessToken)
      .notify(done);
  });
});
