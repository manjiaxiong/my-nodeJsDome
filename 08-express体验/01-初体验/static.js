var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));//  /public 表明这个是静态文件去public这个文件去找
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})