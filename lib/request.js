var Q = require('q');
var R = require('ramda');
var Request = require('request');

var baseURL = 'http://hq.groupbuddies.com/admin';

var defaultOptions = {
  url: baseURL,
  json: true,
  strictSSL: false
}

module.exports = function(options) {
  return {
    get: function(url) {
      return new Q.Promise(function(resolve, reject) {
          var options = {
            url: baseURL + url
          };

          Request.get(R.mixin(defaultOptions, options), function(err, respons, body) {
            if (err)
              reject(err);
            else
              resolve(body);
          });
        });
    }
  };
};
