var express = require('express');
var _ = require('lodash');

var {data, readFiles, writer} = require('../model');

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

router.post('/:model/:id?', function(req, res) {
  if (!req.body) return res.sendStatus(400);
  readFiles('./model/data/' + req.params.model + '.js', function(filename, content) {
    console.log(JSON.parse(content));
    
    res.json(req.body);
  }, function(err) {
    res.json(err);
  });
})

module.exports = router;