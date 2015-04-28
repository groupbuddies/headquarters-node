var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.headquarters.member.all()
    .then(function(users) {
      res.render('users', {
        users: users
      });
    });
});

router.get('/me', function(req, res, next) {
  req.headquarters.member.me()
    .then(function(user) {
      res.render('user', {
        user: user
      });
    });
});

router.get('/search/:query', function(req, res, next) {
  var query = req.params.query;
  req.headquarters.member.search(query)
    .then(function(users) {
      res.render('users', {
        users: users
      });
    });
});

router.get('/email', function(req, res, next) {
  req.headquarters.email.send({
    to: 'gabriel@groupbuddies.com',
    subject: 'demo',
    body: 'Trinta caralho!'
  })
  .then(function(res) {
    res.send(res);
  });
});

module.exports = router;
