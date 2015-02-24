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
    return headquarters
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

    return headquarters
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

    return headquarters
      .setCode('code')
      .then(function() {
        return headquarters.accessToken();
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
