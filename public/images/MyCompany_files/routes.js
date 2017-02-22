/**
 * Created by fredericlopesgoncalvesmagalhaes on 21.02.17.
 */

function _httpGetAsync (theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function getData(id, callback){
  _httpGetAsync('http://localhost:3000/api/data?id=' + id, function(res) {
     callback(JSON.parse(res));
  });
}