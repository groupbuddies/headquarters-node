var Headquarters = require('../lib/headquarters-node');
var Express = require('express');
var request = require('request');

var credentials = require('./settings.json');

var headquarters = Headquarters(credentials);
var app = Express();

app.get('/authorize', function(req, res) {
  headquarters
    .redirectURL()
    .then(function(url) {
      res.redirect(url)
    })
    .catch(function(err) {
      res.send(err);
    });
});

app.get('/callback', function(req, res) {
  headquarters
    .setCode(req.query.code)
    .then(function(token) {
      var options = {
        url: 'http://hq.groupbuddies.com/internal/members',
        oauth: {
          consumer_key: credentials.clientID,
          consumer_secret: credentials.clientSecret,
          token: token
        }
      };

      request.get(options, function(err, response, body) {
        if (err)
          res.send(err);

        res.send(body);
      });
    });
});

app.listen(3000);
