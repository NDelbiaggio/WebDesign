var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileJs = fs.readFileSync('./api/js/client.js');
var db = require('../api/service/db.js');

/* GET home page. */
router.get('/js', function(req, res, next) {
  //res.setHeader('content-type', 'text/javascript');
  res.write(fileJs);
  res.end();
})
.get('/company', function(req, res, next){
  res.send(JSON.stringify(db.getCompany()));
});

module.exports = router;
