"use strict";


var pi = Math.PI;
var r = 8;
var p = 2 * pi * r;
console.log(p);
document.write("Периметърът на кръг с радиус " + r + " e: " + p);



function circleP(x) {
    var result = 2 * Math.PI * x;
    return result;
}
console.log(circleP(10));
document.write("<p>Периметърът е: ", circleP(10), "</p>");
