var Lazy = require("lazy");
var fs = require('fs');
var async = require("async");
var LazyJs = require("lazy.js");



words = new Lazy(fs.createReadStream(process.argv[2]))
    .lines
    .map(String)
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
    .join(function(words){
        var sequence = LazyJs(words).sortBy(function(word){
            return word.length;
        }) ;
        console.log("Short Handle");
        sequence.first(20).each(function(word){
            console.log(word + ":" + word.replace(/@/g, 'at'));
        });

        console.log("Long Handles");
        sequence.last(20).each(function(word){
            console.log(word + ":" + word.replace(/@/g, 'at'));
        });
    });