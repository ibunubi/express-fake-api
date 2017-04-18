var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('lodash');

var data = require('./model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to fake api!' });   
});
router.get('/:model/:id?', function(req, res) {
    var model = req.params.model;
    var store = data[model];
    if(req.params.id){
        let index = _.findIndex(store, function(o) { return o.id == req.params.id; });
        if(index > -1) store = store[index];
        else store = {};
    }
    res.json(store);
});

app.use('/api', router);

app.listen(port);
console.log('running on ' + port);