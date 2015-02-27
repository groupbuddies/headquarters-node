'use strict';

describe('Gihub', function() {
  var headquarters;

  beforeEach(function() {
    headquarters = Headquarters(Settings);
  });

  it('should search for pull requests', function() {
    Mock.githubPullRequests();

    return headquarters.github.pullRequests('is:open')
      .should.eventually.be.fulfilled;
  })
});
