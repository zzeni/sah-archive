"use strict";

function area(a, b, c) {
    var area = a * b + (a * (c - b) / 2);
    return area;
}

console.log(area(10, 6, 10));