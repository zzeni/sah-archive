"use strict";

function area(a, b, c) {
    var rectangle = a * b;
    var triangle = a * (c - b) / 2;
    var result = rectangle + triangle;
    return result;
}
console.log(area(2,1,3));
document.write("Area: ", area(2, 1, 3));