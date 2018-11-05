var express = require('express');
var PORT = 3000;

var app = express();
app.get('/', function (req, res){
  res.send('Hello world from Distelli & Docker!');
  console.log('Running on http://localhost:' + PORT + process.version);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT + process.version);