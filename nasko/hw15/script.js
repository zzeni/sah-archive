function revWord(string) {

var reversedWord = string.split('').reverse().join('');

return string + " ==> " + reversedWord;
}

console.log(revWord("Hello world!"));