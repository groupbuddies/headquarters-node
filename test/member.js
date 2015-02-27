'use strict';

describe('Members', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings);
  });

  it('should return the list of members', function() {
    var members = Mock.members();

    return headquarters.member.all()
      .then(function(response) {
        expect(response.length).to.equal(members.length);
      });
  });

  it('should search for a user', function() {
    var queryEmail = 'gabriel@groupbuddies.com';

    var members = Mock.membersSearch([{
      email: queryEmail
    }]);

    return headquarters.member.search(queryEmail)
      .then(function(response) {
        expect(response[0].email).to.equal(queryEmail)
      });
  })
});
