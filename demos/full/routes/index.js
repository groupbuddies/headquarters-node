var express = require('express');
var router = express.Router();

router.get('/authorization', function(req, res, next) {
  req.headquarters
    .redirectURL()
    .then(function(url) {
      res.redirect(url);
    });
});

router.get('/callback', function(req, res) {
  req.headquarters
    .setCode(req.query.code)
    .then(function() {
      var accessToken = req.headquarters.accessToken();
      req.session.accessToken = accessToken;
      return res.redirect('/users');
    })
    .catch(function(err) {
      res.render('error', {
        error: err
      });
    });
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
