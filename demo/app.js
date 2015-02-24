var Headquarters = require('../dist/headquarters-node');
var Express = require('express');
var request = require('request');
var Q = require('q');
var R = require('ramda');

var credentials = require('./settings.json');
var app = Express();

var headquarters = Headquarters(credentials);

var requestOptions = R.curry(function(method, url, token) {
  return {
    url: url,
    method: method,
    headers:  {
      Authorization: 'Bearer ' + token,
      Accept: 'v2'
    }
  };
});

var performRequest = function(method, url) {
  return headquarters
    .accessToken()
    .then( requestOptions(method, url) )
    .then(function(options) {
      var deferred = Q.defer();
      request.get(options, function(err, response, body) {
        if (err)
          deferred.reject(err);
        else
          deferred.resolve(body);
      });
      return deferred.promise;
    });
};

app.get('/authorize', function(req, res) {
  headquarters
    .redirectURL()
    .then(function(url) {
      console.log('REDIRECT_URL', url);
      res.redirect(url);
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.get('/callback', function(req, res) {
  headquarters
    .setCode(req.query.code)
    .then(function() {
      return headquarters.Member.all();
    })
    .then(function(response) {
      return res.send(response);
    })
    .catch(function(err) {
      console.log(err);
      return res.send(err);
    });
});

app.listen(3000);
