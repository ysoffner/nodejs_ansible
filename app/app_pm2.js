var express = require('express');
var PORT = 3000;

var app = express();

console.log('PM2 app');

app.get('/', function (req, res){
  res.send('Hello world!');
});

app.listen(PORT);