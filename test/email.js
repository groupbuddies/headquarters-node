'use strict';

describe('Email', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings.clientCredentials);
    headquarters.accessToken('accessToken');
  });

  it('should send an email', function() {
    Mock.email();

    var params = {
      to: 'gabriel@groupbuddies.com',
      subject: 'Testing',
      body: 'Email content'
    };

    return headquarters.email.send(params)
      .should.eventually.be.fulfilled;
  });
});
