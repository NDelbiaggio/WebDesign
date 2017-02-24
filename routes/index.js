var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DELONIFR' });
})
.get('/french', function(req, res, next) {
  res.render('french/index', {title: 'DELONIFRENCH'});
});

module.exports = router;
