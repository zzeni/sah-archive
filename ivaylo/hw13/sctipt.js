"use strict";


function power3(x) {
    var result = x * x * x;
    return result;
}

power3(100, 3);



function square(x) {
    var result = x * x;
    return result;

}

console.log("suqare of 10:", square(10));

document.write("<p>suqare of 10: 100", "</p>");


var r = 8;
var pi = Math.PI;
var result = 2 * pi * r;
console.log("Периметърът на кръг с радиус " + r + " е: " + result);

document.write("<p>Периметърът на кръг с радиус 8 е: 50.26548245743669",
"</p>");

function circlePer(x) {
    var result = 2 * Math.PI * x;
    return result;
}

console.log("Circle face is :", circlePer(10));

document.write("<p>Circle perimeter is : 62.83185307179586", "</p>");


function area(a, b, c) {
    var result = (a * b) + (a * (c - b) / 2);
    return result;
}

console.log("Face of figure is:", area(2, 1, 3));

document.write("<p>Face of figure is: 4", "</p>");


function calc(x) {
    if (x % 2 == 0) {
        return x * x;
    } else {
        return x * x * x;
    }
}



function circle(r) {
    var result = r * r * Math.PI;
    return Math.round(result);
}


console.log("Circle perimeter is: ", circle(5));

document.write("<p>Circle perimeter is:  79","</p>");