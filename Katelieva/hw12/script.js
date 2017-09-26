function convert(r, g, b) {
    var result;
    result = r.toString(16) + g.toString(16) + b.toString(16);
    return result;
}

convert(255, 192, 203);



function circle(radius) {
    var result;
    result = 2 * Math.PI * radius;

    return Math.round(result);
}

var radius = 8;
var circleResult = circle(radius);
document.getElementById('radius').innerHTML = radius;
document.getElementById('perimeter').innerHTML = circleResult;
console.log(circle(20));