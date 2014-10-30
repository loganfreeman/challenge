fs = require('fs');
Lazy = require("lazy.js");
fs.readFile(process.argv[2], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var words = data.split("\n");
  var lazy = new Lazy(words);
  var sequence = lazy
      .filter(function(line) {
          if (/^at/.test(line) && !/'/.test(line)) {

              return true;
          }else{
              return false;
          }
      })
      .map(function(line) {
          return line.replace(/at/g, '@').trimRight();
      })
      .sortBy(function(word){
            return word.length;
      })
        console.log("Short Handle");
        sequence.first(20).each(function(word){
            console.log(word + ":" + word.replace(/@/g, 'at'));
        });

        console.log("Long Handles");
        sequence.last(20).each(function(word){
            console.log(word + ":" + word.replace(/@/g, 'at'));
        });

});