var red = 255;

var green = 192;

var blue = 253;

function convert(red, green, blue) {
    var result;
    var HexRed = red.toString(16);
    var HexGreen = green.toString(16);
    var HexBlue = blue.toString(16);

    if (red <16){
        HexRed ="0"+HexRed;
    }

    if (green <16){
        HexGreen ="0"+HexGreen;
    }

    if (blue <16){
        HexBlue ="0"+HexBlue;
    }
    result="#"+HexRed+HexGreen+HexBlue;
    // calculate the hex color in result
    return result;
}

console.log(convert(255, 192, 253)); // => #ffc0cb
document.write("<p>This hex color is ", convert(255, 192, 253), "</p>");



function forCheckEven(array) {


    for (var i = 0; i < array.length; i++) {

        if (array[i]%2 ==1){
            return false;
        }
    }
    return true;
}
console.log(forCheckEven([2,14,6,24,8]));
console.log(forCheckEven([2,3,6,24,8]));
document.write("<p>All numbers are even: ", forCheckEven([2,14,6,24,8]), "</p>");
document.write("<p>All numbers are even: ", forCheckEven([2,3,6,24,8]), "</p>");


function whileCheckEven(array) {
    var i=0;
    while (i < array.length) {
        i++;
        if (array[i]%2 ==1){
            return false;
        }
    }
    return true;
}

console.log(whileCheckEven([2,14,6,24,8]));
console.log(whileCheckEven([2,3,6,24,8]));
document.write("<p>All numbers are even: ", forCheckEven([2,14,6,24,8]), "</p>");
document.write("<p>All numbers are even: ", forCheckEven([2,3,6,24,8]), "</p>");

//Task 2

function sumArray(array) {
    for (
        var
        i = 0,              // The iterator
        sum = 0;                // The total amount
        i < array.length;         // The "for"-loop condition
        sum += array[i++]   // Add number on each iteration
    );
    return sum;
}
console.log(sumArray([2,14,6,24,8]));
document.write("<p>The sum is ", sumArray([2,14,6,24,8]), "</p>");


sum = 0;

let array = [2,14,6,24,8];

function sumEven(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sum = sum + array[i];
        }
    }
    return sum;
}

//console.log(sumEven(array));
document.write("<p>The even sum is ", sumEven(array), "</p>");

sum = 0;

function sumOdd(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i]%2 ==1) {
            sum = sum + array[i];
        }
    }
    return sum;
}

//console.log(sumOdd(array));
document.write("<p>The odd sum is ", sumOdd(array), "</p>");
