var fs = require('fs');

function writer(src, data) {
  console.log('src', src);
  fs.writeFile(src, data, function(err){
    if(err) throw err;
    console.log('complete');
  });
}

module.exports = writer;