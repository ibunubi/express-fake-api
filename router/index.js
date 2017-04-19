var express = require('express');
var _ = require('lodash');

var data = require('../model');

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to fake api!' });   
});

router.get('/:model/:id?', function(req, res) {
  var model = req.params.model;
  var store = data[model];
  console.log(req.originalUrl);
  if(req.params.id){
    let index = _.findIndex(store, function(o) { return o.id == req.params.id; });
    if(index > -1) store = store[index];
    else store = {};
  }
  res.json(store);
});

module.exports = router;