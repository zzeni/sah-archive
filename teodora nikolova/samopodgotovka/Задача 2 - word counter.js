"use strict";
// var text = "The quick brown fox jumps over the lazy dog";

function wordCounter (text) {
    var separator=text.split(" ");
    var counter=separator.length;
    return counter;
}

console.log(wordCounter("The quick brown fox jumps over the lazy dog")); // 9