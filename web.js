var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 var buffer = new Buffer("Hello from websomething majijigy");
 buffer = fs.readFile("$HOME//bitstarter//index.html");
 var string = (buffer.ToString());
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
