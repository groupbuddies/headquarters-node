'use strict';

describe('Members', function() {
  it('should return the list of members', function(done) {
    var members = Mock.members();

    return Headquarters.Member.all()
      .then(function(response) {
        var responseMembers = JSON.parse(response);
        expect(responseMembers.length).to.equal(members.length);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
});
