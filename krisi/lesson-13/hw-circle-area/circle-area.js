"use strict";

function circleArea(radius) {
    var result;
    result = Math.round(Math.PI * radius * radius);
    return result;
}
console.log(circleArea(5));
document.write("The area is: ", circleArea(5));
