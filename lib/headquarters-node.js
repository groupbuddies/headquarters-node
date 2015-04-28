var Flow = require('./flow');

module.exports = function(options) {
  if (options.type == 'authorizationCode')
    return Flow.authorizationCode(options);
  else if (options.type == 'clientCredentials')
    return Flow.clientCredentials(options);
  else
    throw new Error('Flow type not specified.');
};
