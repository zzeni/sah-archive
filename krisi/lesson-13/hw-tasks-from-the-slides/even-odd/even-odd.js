"use strict";

function calc(x) {
    if (x % 2 == 0) {
        return x * x;
    } else {
        return x * x * x;
    }
}
console.log(calc(3));
document.write("Резултатът е: ", (calc(3)));
document.write("<p>Резултатът е: ", (calc(2)), "</p>");
