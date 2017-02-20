var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileJs = fs.readFileSync('./api/client.js');

var obj = {
  company: "Our company",
  webpage: "http://localhost:3000",
  form: "http://localhost:3000"
};

/* GET home page. */
router.get('/js', function(req, res, next) {
  res.setHeader('content-type', 'text/javascript');
  res.write(fileJs);
  res.end();
})
.get('/', function(req, res, next){
  res.send(JSON.stringify(obj));
  console.log("ENVOYE");
});

module.exports = router;
