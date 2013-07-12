var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 var buffer = new Buffer(fs.readFile("yindex.html");
 var string = new String(buffer);
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
