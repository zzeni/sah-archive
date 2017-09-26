"use strict";

function circle(r) {
    var result = Math.round(Math.PI * Math.pow(r, 2));
    return result;
}

console.log(circle(5));