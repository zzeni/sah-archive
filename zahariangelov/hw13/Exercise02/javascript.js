"use strict";

function rgb(r, g, b) {
    
    var r_hex = r.toString(16);
    var g_hex = g.toString(16);
    var b_hex = b.toString(16);
    
    if (r_hex < 0x10) {
        r_hex = "0" + r_hex;
    }
    
    if (g_hex < 0x10) {
        g_hex = "0" + g_hex;
    }
    
    if (b_hex < 0x10) {
        b_hex = "0" + b_hex;
    }
    var rgb = "#" + r_hex + g_hex + b_hex;
    return rgb;
}

console.log(rgb(255, 192, 253));