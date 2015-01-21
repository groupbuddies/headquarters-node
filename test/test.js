"use strict";

var headquarters = Headquarters({
  apiBase: apiBase,
  clientID: clientId,
  clientSecret: clientSecret,
  callbackURL: callbackURL
});

describe('Headquarters', function() {
  it('should return a url to redirect the user', function(done) {
    return headquarters
      .redirectURL()
      .then(function(url) {
        expect(url).to.equal(redirectURL);
        done();
      })
  });

  it('should return the access code', function(done) {
    var stubToken = 'TOKEN';
    stubAccessToken(stubToken);

    return headquarters
      .setCode('code')
      .then(function(accessToken) {
        expect(accessToken).to.equal(stubToken);
        done();
      })
  });
});

function handleError(err) {
  console.log(err);
}
