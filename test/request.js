'use strict';

describe('Request', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings.clientCredentials);
    headquarters.accessToken('accessToken');
  });

  it('fails when the json response is invalid', function() {
    Mock.invalidEmail();

    var params = {
      to: 'gabriel@groupbuddies.com',
      subject: 'Testing',
      body: 'Email content'
    };

    return headquarters.email.send(params)
      .should.eventually.be.rejected;
  });
});
