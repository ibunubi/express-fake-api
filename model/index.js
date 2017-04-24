// dafault dummy data users
var users = require('./dummy/users');

var {readFiles, writer} = require('./reader');

var data = {users: users}; // declare variable data and default value

// populate all data on ./model/data folder
readFiles('./model/data/', function(filename, content) {
  data[filename.replace('.js', '')] = JSON.parse(content);
}, function(err) {
  console.log(err);
});

// exports data as module
module.exports = {
  data: data,
  readFiles: readFiles,
  writer: writer
};