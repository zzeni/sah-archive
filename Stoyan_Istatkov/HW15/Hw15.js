/**
 * Created by STEVIS on 4/20/2017.
 */
"use strict";
function reverseWord(word) {
    return word.split("").reverse().join("");
}
reverseWord("Hello");

document.write("<p>"+ "The word : " + "\"" + "Hello" + "\"" + "  reverse is : " +reverseWord("Hello")+"</p>");


var sentance = ["The quick brown fox jumps over the lazy dog"];

sentance.map(function (word) {
    return word.split("").reverse().join("").split(" ").reverse().join(" ");
});


document.write("<p>"+"The sentance : " + "\"" + sentance + "\"" + "  reverse is : "+sentance.map(function (word) {
        return word.split("").reverse().join("").split(" ").reverse().join(" ");
    })+"</p>");