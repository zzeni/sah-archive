function rev(sentence) {

    var words = sentence.split(" ");

    function reverseName(words) {
        return words.split("").reverse().join("");
    }


    var reversedWords = words.map(reverseName);

    return reversedWords.join(" ");
}

console.log(rev("The quick brown fox jumps over the lazy dog"));