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

  if(typeof store == 'undefined') res.json({"error": true, "code": 500, "desc": "internal server error"});

  console.log(req.originalUrl);
  
  if(req.params.id){
    let index = _.findIndex(store, function(o) { return o.id == req.params.id; });
    if(index > -1) store = store[index];
    else store = {"error": true, "code": 404, "desc": "data not found"};
  }
  res.json(store);
});

router.post('/:model/:id?', function(req, res) {
  if (!req.body) return res.sendStatus(400);

  var model = req.params.model;
  var store = data[model];

  if(typeof store == 'undefined') res.json({"error": true, "code": 500, "desc": "internal server error"});

  var src = './model/data/' + model + '.js';

  readFiles(src, function(filename, content) {
    var existing = JSON.parse(content);
    var lastId = existing[existing.length-1].id;

    var newData = req.body;
    if(typeof req.params.id != 'undefined') {
      _.remove(existing, function(item) {
        return item.id == req.params.id; // or some complex logic
      });
      
      newData.id = req.params.id;
    }
    else
      newData.id = ++lastId;

    existing.push(newData);

    writer(src, JSON.stringify(existing, null, 2));

    res.json(newData);
  }, function(err) {
    res.json(err);
  });
})

module.exports = router;