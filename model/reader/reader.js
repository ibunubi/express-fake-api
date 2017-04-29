// read json data on spesific folder
var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  if(fs.existsSync(dirname)){
    if(fs.lstatSync(dirname).isDirectory()){
      console.log("came to group", dirname);
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

      console.log("came to single", dirname);
      fs.readFile(dirname, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(dirname, content);
      });

    }
  } else {
    console.log("file not found!", dirname);
    var data = [];
    return data;
  }
}

module.exports = readFiles;