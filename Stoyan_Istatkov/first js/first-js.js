/**
 * Created by STEVIS on 4/13/2017.
 */
'use strict';
var pi = Math.PI;
var rad = 8;
var  result = 2*pi*rad;
console.log("Периметърът на кръг с радиус RADIUS e: RESULT")

var text = "Периметърът на кръг с радиус RADIUS е: RESULT";
var resultText = text.replace("RADIUS", rad).replace("RESULT", result);

console.log(resultText);
document.write("<p>", resultText, "</p>");

function square(x) {
  var result =x*x;
  return result;
}
console.log("square of 10:", square(10)); // => square of 10: 100
console.log("square of 4:", square(4));
console.log("square of 16:", square(16));

document.write("<p>square of 10:", square(10), "</p>");

function area (a,b,c) {
    var prav =a*b;
    var tri  =a*(c-b)/2;
    var result =prav+tri;
    return result;
}
area(5,4,3)
document.write("<p>","Лицето на многоъгълник е:" ,area(5,4,3), "</p>");

function perimeter(radius) {
var result = 2*Math.PI*radius;
var roundResult=Math.round(result);
return roundResult;
}

console.log("radius 8:", perimeter(8));
console.log("radius 2:", perimeter(2));
console.log("radius 4:", perimeter(4));
document.write("<p>", "radius 8: ", perimeter(8), "</p>");



