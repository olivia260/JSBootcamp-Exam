var fs = require('fs');
var path = require('path');
 
if (process.argv.length <= 3) {
    console.log("USAGE: node search [EXT] [TEXT]");
    process.exit(-1);
}
 
var current_path = __dirname;
var ext = process.argv[2];
var text = process.argv[3];

fs.readdir(current_path, function(err, items) { 
    if (err) {
      console.log("ERROR: " + error);
      process.exit(-1);
    }

    for (var i=0; i<items.length; i++) {
        // Filter extension (and should also filter out directories)
        if (path.extname(items[i]) !== '.' + ext) {
          continue;
        }

        // Filter by name
        if (items[i].indexOf(text) <= -1) {
          continue;
        }
        
        // Make the full path compatible to all OS
        console.log(path.join(current_path, items[i]));
    }
});
