var express = require('express');
var PORT = 3000;

var app = express();

console.log('Running on http://$container_nodejs:' + PORT);
console.log('Version NodeJS:' + process.version);

app.get('/', function (req, res){
  res.send('Hello world!');
});

app.listen(PORT);