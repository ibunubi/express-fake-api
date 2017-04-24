var fs = require('fs');

function writer(src, data) {
  fs.writeFile(src, data, function(err){
    if(err) throw err;
    console.log('complete');
  });
}