var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var data = require('./model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to fake api!' });   
});
router.get('/hello', function(req, res) {
    console.log(data.users);
    res.json(data.users);
});

app.use('/api', router);

app.listen(port);
console.log('running on ' + port);