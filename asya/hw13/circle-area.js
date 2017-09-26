"use strict";

function circle(r) {
var area = Math.PI*r*r;
var roundedArea = Math.round(area*100)/100;
return roundedArea;
}

console.log("The area of circle with radius 8 is: ", circle(8));