'use strict';

describe('Headquarters', function() {
  it('should throw an error if some settings are missing', function(done) {
    function initialize() {
      Headquarters.initialize(R.omit(Settings, 'callbackURL'));
    }

    expect(initialize).to.throw(Error);
    done();
  });
});

describe('Headquarters: Authorization', function() {
  it('should return a url to redirect the user', function(done) {
    return Headquarters
      .redirectURL()
      .then(function(url) {
        expect(url).to.equal(Settings.redirectURL);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('should set the code', function(done) {
    var accessToken = Mock.accessToken();

    return Headquarters
      .setCode('code')
      .then(function(responseToken) {
        expect(responseToken).to.equal(accessToken);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });

  it('should return the access token', function(done) {
    var accessToken = Mock.accessToken();

    return Headquarters
      .setCode('code')
      .then(function() {
        return Headquarters.accessToken();
      })
      .then(function(responseToken) {
        expect(responseToken).to.equal(accessToken);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
});
