function revWord(word) {
    
var reversedWord = word.split('').reverse().join('');

return word + " ==> " + reversedWord;
}

console.log(revWord("squirrel"));