function swapLetters(short) {
    var result;
    var firstChar = short[0];
    var lastChar = short[short.length - 1];
    var between = short.slice(1, short.length-1);
    var result = lastChar.concat(between).concat(firstChar);
    
    console.log(result);
}

swapLetters("A11111111C");