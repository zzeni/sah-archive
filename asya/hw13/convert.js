"use strict";

function convert(x) {
    var hex = x.toString(16);
    return hex.length == 1 ? "0" + hex : hex; //Add zero if we get only one character
}

function rgbToHex(r, g, b) {
    return "#" + convert(r) + convert(g) + convert(b);
}

console.log(rgbToHex(255, 192, 203));