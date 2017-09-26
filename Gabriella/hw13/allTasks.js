var pi = Math.PI;
var result;

function calculateCirclePerimeter(r) {
    result = 2 * pi * r;
}

calculateCirclePerimeter(8);

document.write("Circle perimeter is: " + result + " ");
console.log("Circle perimeter is: " + result + " ");

function area(a, b, c) {
    var recArea = a * b;
    var h = c - b;
    var triArea = a * h / 2;
    return recArea + triArea;
}

document.write("Area is: " + area(10, 6, 10) + " ");
document.write("Area is: " + area(2, 1, 3) + " ");
document.write("Area is: " + area(10, 6, 10) + " ");

console.log("Area is: " + area(10, 6, 10) + " ");
console.log("Area is: " + area(2, 1, 3) + " ");
console.log("Area is: " + area(10, 6, 10) + " ");

function convert(r, b, g) {
    return "#" + r.toString(16) + b.toString(16) + g.toString(16);
}

document.write(convert(255, 192, 253));
console.log(convert(255, 192, 253));

var a = 50;

function sqare() {
    return a * a;
}

document.write("Square of " + a + " is " + sqare() + " ");
console.log("Square of " + a + " is " + sqare() + " ");

var b = 51;

function power3() {
    return a * a * a;
}

document.write(a + " power of 3 " + power3() + " ");