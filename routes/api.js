var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileJs = fs.readFileSync('./api/js/client.js');
var db = require('../api/service/db.js');

router.get('/js', function(req, res) {
  res.write(fileJs);
  res.end();
})
.get('/company', function(req, res){
  res.send(JSON.stringify(db.getCompany()));
})
.get('/data', function(req, res){
  var obj = db.getDescription(req.query.id);
  res.send(JSON.stringify(obj));
});

module.exports = router;
