var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Headquarters client credentials flow demo'
  });
});

module.exports = router;
