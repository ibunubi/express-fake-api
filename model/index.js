// dafault dummy data users
var users = require('./dummy/users');

// read json data on spesific folder
var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = {users: users}; // declare variable data and default value

// populate all data on ./model/data folder
readFiles('./model/data/', function(filename, content) {
  data[filename.replace('.js', '')] = JSON.parse(content);
}, function(err) {
  console.log(err);
});

// exports data as module
module.exports = data;