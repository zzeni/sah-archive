"use strict";

//TASK 1 - WORDS CONVERT


function reverseWords(word) {

    return word.split("").reverse().join("");

}

var word = ["dog"];

console.log(word.map(reverseWords));



//TASK 2 - WORDS IN SENTENCE CONVERT


function reverseWords(text) {

    return text.split("").reverse().join("").split(" ").reverse().join(" ");

}

var sentence = ["The quick brown fox jumps over the lazy dog"];

sentence.map(reverseWords); // => 'ehT kciuq nworb xof spmuj revo eht yzal god'
