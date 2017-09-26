"use strict";

var pi = 3.14;
var r = 8;
var result = 2*pi*r;
var text = "Периметърът на кръг с радиус XXX е: YYY";
var resultText = text.replace("XXX", r).replace("YYY", result);

console.log(resultText);
document.write("<p>", resultText, "</p>");


function power3(x) {
    var result = x*x*x;
    return result;
}

console.log("Third degree of 2 is: ", power3(2));
console.log("Third degree of 3 is: ", power3(3));
console.log("Third degree of 4 is: ", power3(4));
document.write("<p><mark>Third degree of 2 is: ", power3(2), "</mark></p>");
document.write("<p><mark>Third degree of 3 is: ", power3(3), "</mark></p>");
document.write("<p><mark>Third degree of 4 is: ", power3(4), "</mark></p>");

power3(2);

function square(a) {
    var result = a*a;
    return result;
}

console.log("square of 4 is: ", square(4));
console.log("square of 6 is: ", square(6));
console.log("square of 10 is: ", square(10));
document.write("<p>Square of 4 is: ", square(4), "</p>");
document.write("<p>Square of 6 is: ", square(6), "</p>");
document.write("<p>Square of 10 is: ", square(10), "</p>");


function perimeter(r) {
    var result = 2*Math.PI*r;
    var roundedResult = Math.round(result*100)/100;
    return roundedResult;
}

console.log("radius 8:", perimeter(8));
console.log("radius 9:", perimeter(9));
console.log("radius 10:", perimeter(10));
document.write("<p><mark>Circle's perimeter with radius 8 is: ", perimeter(8), "</mark></p>");
document.write("<p><mark>Circle's perimeter with radius 9 is: ", perimeter(9), "</mark></p>");
document.write("<p><mark>Circle's perimeter with radius 10 is: ", perimeter(10), "</mark></p>");

function area(a, b, c) {
    var triangle = (a*(c-b)/2);
    var rectangle = (a*b);
    var wholeArea = triangle + rectangle;
    return wholeArea;
}

console.log("The area of a figure with sides 10, 6, 10 is: ", area(10, 6, 10));
console.log("The area of a figure with sides 10, 6, 10 is: ", area(2, 1, 3));
document.write("<p>The area of a figure with sides 10, 6, 10 is: ", area(10, 6, 10), "</p>");
document.write("<p>The area of a figure with sides 2, 1, 3 is: ", area(2, 1, 3), "</p>");

function calc(x) {
    if (x % 2 == 0) {
        return x*x;
    } else {
        return x*x*x;
    }
}

console.log("If the figure 2 is odd, You will see its square, otherwise You will see its third degree: ", calc(2));
console.log("If the figure 3 is odd, You will see its square, otherwise You will see its third degree: ", calc(3));
document.write("<p><mark>If the figure 2 is even, You will see its square, otherwise You will see its third degree: ", calc(2), "</mark></p>");
document.write("<p><mark>If the figure 3 is even, You will see its square, otherwise You will see its third degree: ", calc(3), "</mark></p>");