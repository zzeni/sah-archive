"use strict";

function circle(r) {
    var area = Math.PI*r*r;
    var roundedArea = Math.round(area);
    return roundedArea;
}

console.log("The area of circle with radius 5 is: ", circle(5));
document.write("The area of circle with radius 5 is: ", circle(5));

var team = ["Ivan", "Pesho", "Mimi"];

function isMember(name) {
    if (team.indexOf(name) == -1) {
        return false;
    }
    else {
        return true;
    }
}

console.log("The team is: ", team);
console.log("Pesho is member of the team: ", isMember("Pesho"));
console.log("Plamen is member of the team: ", isMember("Plamen"));
document.write("<p><mark>The team is: ", team, "</mark></p>");
document.write("<p><mark>Pesho is member of the team: ", isMember("Pesho"), "</mark></p>");
document.write("<p><mark>Plamen is member of the team: ", isMember("Plamen"), "</mark></p>");


function convert(red, green, blue) {
    var redHex = (red < 16) ? "0" : red.toString(16);
    var greenHex = (green < 16) ? "0" : green.toString(16);
    var blueHex = (blue < 16) ? "0" : blue.toString(16);

    var result = "#" + redHex + greenHex + blueHex;
    return result;
}
console.log(convert(255, 192, 253));
document.write("<p>RGB (255, 192, 253) converted to Hex color is: ", convert(255, 192, 253), "</p>");


var car = {
    engine: "diesel",
    color: "red",
    doors: 5,
    year: 2015
}

var item = {
    price: 30,
    name: "t-shirt",
    picture: "/img/t-shirt.jpg"
}

var shoppingCart = [
    {
        itemName: "t-shirt",
        itemPrice: 30,
        quantity: 3
    },
    {
        itemName: "hat",
        itemPrice: 15,
        quantity: 1
    },
    {
        itemName: "gloves",
        itemPrice: 10,
        quantity: 2
    },
];

function forCheckEven(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            return false;
        }
    }
    return true;
}

console.log(forCheckEven([2, 14, 6, 24, 8]));
console.log(forCheckEven([2, 3, 6, 24, 8]));
document.write("<p><mark><strong>With For loop: </strong>The array [2, 14, 6, 24, 8] consists only of even figures: ", forCheckEven([2, 14, 6, 24, 8]), "</p></mark>");
document.write("<p><mark><strong>With For loop: </strong>The array [2, 3, 6, 24, 8] consists only of even figures: ", forCheckEven([2, 3, 6, 24, 8]), "</p></mark>");


function whileCheckEven(array) {
    var i = 0;
    while (i < array.length) {
        if (array[i] % 2 == 1) {
            return false;
        }
        i += 1;
    }
    return true;
}

console.log(whileCheckEven([2, 14, 6, 24, 8]));
console.log(whileCheckEven([32, 44, 26, 9, 4]));
document.write("<p><strong>With While loop: </strong>The array [2, 14, 6, 24, 8] consists only of even figures: ", whileCheckEven([2, 14, 6, 24, 8]), "</p>");
document.write("<p><strong>With While loop: </strong>The array [32, 44, 26, 9, 4] consists only of even figures: ", whileCheckEven([32, 44, 26, 9, 4]), "</p>");


function doCheckEven(array) {
    var i = 0;
    do {
        if (array[i] % 2 == 1) {
            return false;
        }
        i += 1;
    }
    while (i < array.length);
    return true;
}

console.log(doCheckEven([2, 14, 6, 24, 8]));
console.log(doCheckEven([1, 14, 6, 24, 8]));
document.write("<p><mark><strong>With Do loop: </strong>The array [2, 14, 6, 24, 8] consists only of even figures: ", doCheckEven([2, 14, 6, 24, 8]), "</p></mark>");
document.write("<p><mark><strong>With Do loop: </strong>The array [1, 14, 6, 24, 8] consists only of even figures: ", doCheckEven([1, 14, 6, 24, 8]), "</p></mark>");

function sum(array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(sum([2, 1, 16, 3, 9]));
document.write("<p>", "The sum of array [2, 1, 16, 3, 9] is: " + sum([2, 1, 16, 3, 9]), "</p>");

function sumEven(array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i]%2 == 0) {
            total += array[i];
        }
    }
    return total;
}

console.log(sumEven([2, 1, 16, 3, 9]));
document.write("<p>", "The sum of all <strong>even</strong> numbers in array [2, 1, 16, 3, 9] is: " + sumEven([2, 1, 16, 3, 9]), "</p>");

function sumOdd(array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i]%2 == 1) {
            total += array[i];
        }
    }
    return total;
}

console.log(sumOdd([2, 1, 16, 3, 9]));
document.write("<p>", "The sum of all <strong>odd</strong> numbers in array [2, 1, 16, 3, 9] is: " + sumOdd([2, 1, 16, 3, 9]), "</p>");