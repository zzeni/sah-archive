var str="The quick brown fox jumps over the lazy dog";
function WordCount(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            sum = sum +1;
        }
    }
    return sum + 1;
}
console.log(WordCount(str));