var request = require('./request');

module.exports = {
  all: function() {
    return request.get('members');
  }
};
