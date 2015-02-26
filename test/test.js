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

  it('should set the code', function() {
    var accessToken = Mock.accessToken();

    headquarters.setCode('code')
      .should
      .eventually
      .equal(accessToken);
  });

  it('should set the access token', function() {
    var accessToken = 'abc';
    headquarters.accessToken(accessToken);

    return expect(headquarters.accessToken())
      .to
      .equal(accessToken);
  });

  it('should return a url to redirect the user', function() {
    return headquarters.redirectURL()
      .should
      .eventually
      .equal(Settings.redirectURL);
  });

  it('should return the access token', function() {
    var accessToken = Mock.accessToken();

    function requestAccessToken() {
      return headquarters.accessToken();
    }

    return headquarters.setCode('code')
      .then(requestAccessToken)
      .should
      .eventually
      .equal(accessToken);
  });
});
