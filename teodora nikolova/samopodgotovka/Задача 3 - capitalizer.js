"use strict";
// var text = "The quick brown fox jumps over the lazy dog";
function capitalize(text) {
    var separator=text.toLowerCase().split(" ");
    for (var i = 0; i < separator.length; i++) {
        separator[i]=separator[i].charAt(0).toUpperCase()+separator[i].substring(1);

    }
    return separator.join(" ");

}
console.log(capitalize("The quick brown fox jumps over the lazy dog")); // "The Quick Brown Fox Jumps Over The Lazy Dog"
