var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   console.log(req.cookies,'req.cookiesreq.cookiesreq.cookies');
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
  console.log(server.address());
  var host = server.address().address
  var port = server.address().port
 
  console.log("%s:%s", host, port)
 
})