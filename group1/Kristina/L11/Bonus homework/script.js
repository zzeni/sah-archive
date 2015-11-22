var short = "abc";
short.charAt(0);
short.charAt(short.length - 1);
var firstChar = short[0];
var lastChar = short[short.length - 1];
var between = short.slice(1, 2);
var result = lastChar.concat(between).concat(firstChar);
alert(result);