document.write("Exercise 3.1: obfuscate text <br>");

function obfuscate(text) {
    var result;
    if (text.length < 4) {
        throw ("Errow:given text is too short");
    } else if (text.length >= 4 && text.length <= 8) {
        result = text.charAt(0) + "*****" + text.charAt(text.length - 1);
    } else if (text.length > 8) {
        result = text.charAt(0) + "*********" + text.substring(text.length - 5, text.length - 1);
    }
    return result;
}

try {
    obfuscate("asd");
} catch (error) {
    console.log(error); // => Error: given text is too short  
}

document.write("obfuscate 'secret' : " + obfuscate("secret") + "<br>"); // => "s****t"
document.write("obfuscate '1234567890' : " + obfuscate("1234567890") + "<br><br>"); // => "1*****7890"

document.write("Exercise 3.2: circle perimeter <br>");

var pi = Math.PI;
function circle(r) {
  var result;
  result = pi * r * r;
  return result;
}
document.write("Circle perimeter is: " + Math.round(circle(5)) + " <br><br>");

document.write("Exercise 3.3: convert rbg <br>");

function convert(r, b, g) {
    var red = r.toString(16).length == 1 ? "0" + r.toString(16) : r.toString(16);
    var blue = b.toString(16).length == 1 ? "0" + b.toString(16) : b.toString(16);
    var green = g.toString(16).length == 1 ? "0" + g.toString(16) : g.toString(16);
    return "#" + red + blue + green;
}
document.write("Color hex value: " + convert(255, 192, 253) + " <br>");
