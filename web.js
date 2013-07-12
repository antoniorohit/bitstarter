var express = require('express');
var fs = require('fs');
var Buffer = require('Buffer');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 buffer = fs.readFile("index.html");
 string = Buffer.toString(buffer);
 response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
