function colorToHex(ccc) {
    var hex = ccc.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    var result = "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);

    return result;
}

console.log(rgbToHex(6, 27, 255)); // #061bff