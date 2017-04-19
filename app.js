var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = require('./router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port);
console.log('running on ' + port);