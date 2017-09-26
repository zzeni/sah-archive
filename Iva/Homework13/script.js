"use strict";

function square(x){
    var result= x*x;
    return result;
}

console.log("square of 10:", square(10));
document.write("<p>square of 10:", square(10), "</p>");

function circle(z){
    var result= 2* Math.PI*z;
    return result;
}
console.log("radius 8", circle (8));
document.write("<p>radius 8", circle (8), "</p>");

function area(a,b,c){
    var result= ((a*b) + (a*(c-b)/2));
    return result;
}
console.log("text", area (2,1,3));
console.log("text", area (10,6,10));
document.write("<p>text", area (2,1,3), "</p>");
document.write("<p>text", area (10,6,10), "</p>");
