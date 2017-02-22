/**
 * Created by fredericlopesgoncalvesmagalhaes on 20.02.17.
 * This is the JavaScript file sent to the client to use our API
 *
 * HOW IT WORKS?
 *  In your current HTML page, add a the div <div id="ourApi"></div>
 *  and the script <script src="http://localhost:3000/api/js"></script>
 */

function start() {
  httpGetAsync('http://localhost:3000/api/company', function(res){
    var data = JSON.parse(res);
    console.log("client.js to modify, res: " + data);
  });
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

start();