/*globals Headquarters, Settings, R */

'use strict';

describe('Headquarters', function() {
  it('should throw an error if flow type is missing', function(done) {
    function initialize() {
      Headquarters(R.omit(Settings.authorizationCode, 'type'));
    }

    expect(initialize).to.throw(Error);
    done();
  });
});
