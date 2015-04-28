var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  req.headquarters.member.all()
    .then(function(users) {
      res.render('users', {
        users: users
      });
    });
});

router.get('/test/:email', function(req, res) {
  var email = req.params.email;
  var options = {
    to: 'gabriel@groupbuddies.com',
    //to: email,
    subject: 'demo',
    body: 'Trinta caralho!'
  };

  req.headquarters.email.send(options)
    .then(function() {
      res.redirect('/');
    });
});

module.exports = router;
