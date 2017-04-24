// read json data on spesific folder
var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  if(fs.stats(dirname).isDirectory()){

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

  } else {

    fs.readFile(dirname, 'utf-8', function(err, content) {
      if (err) {
        onError(err);
        return;
      }
      onFileContent(dirname, content);
    });

  }
}

module.exports = readFiles;