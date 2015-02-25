'use strict';

describe('Email', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings);
  });

  it('should send an email', function(done) {
    Mock.email();

    var params = {
      to: 'gabriel@groupbuddies.com',
      subject: 'Testing',
      body: 'Email content'
    };

    headquarters.email.send(params)
      .should.eventually.be.fulfilled
      .and.notify(done);
  });
});
