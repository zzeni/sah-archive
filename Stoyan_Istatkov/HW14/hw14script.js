/**
 * Created by STEVIS on 4/18/2017.
 */
/**
 * Created by STEVIS on 4/18/2017.
 */

"use strict";

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
document.write("<p>"+"forCheckEven: "+ forCheckEven([2, 14, 6, 24, 8])+"</p>");
document.write("<p>"+"forCheckEven: "+ forCheckEven([2, 3, 6, 24, 8])+"</p>");



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
console.log(whileCheckEven([2, 3, 6, 24, 8]));
document.write("<p>"+"whileCheckEven: "+ whileCheckEven([2, 14, 6, 24, 8])+"</p>");
document.write("<p>"+"whileCheckEven: "+ whileCheckEven([2, 3, 6, 24, 8])+"</p>");



function doCheckEven(array) {
    var i = 0;
    do {
        i += 1;
        if (array[i] % 2 == 1) {
            return false;
        }

        return true;
    } while (i < array.length);
}

console.log(doCheckEven([2, 14, 6, 24, 8]));
console.log(doCheckEven([2, 3, 6, 24, 8]));
document.write("<p>"+"doCheckEven: "+ doCheckEven([2, 14, 6, 24, 8])+"</p>");
document.write("<p>"+"doCheckEven: "+ doCheckEven([2, 3, 6, 24, 8])+"</p>");




function sumArray(array) {

    var total = 0;
    var i ;
    for(i=0; i<array.length; i++){
        total += array[i];
    }
    return total;
}
array =  [2, 1, 16, 3, 9];
console.log(sumArray(array));
document.write("<p>"+"sumArray: "+ sumArray([2, 1, 16, 3, 9])+"</p>");


function sumOdd(array) {

    var total = 0;
    var i ;
    for(i=0; i<array.length; i++){
        if (array[i] % 2 == 1) {
            total += array[i];
        }

    }
    return total;
}
var array =  [2, 1, 16, 3, 9];
console.log(sumOdd(array));
document.write("<p>"+"sumOdd: "+ sumOdd([2, 1, 16, 3, 9])+"</p>");

function sumEven(array) {

    var total = 0;
    var i ;
    for(i=0; i<array.length; i++){
        if (array[i] % 2 == 1) {
        }
        else {
            total += array[i];
        }
    }
    return total;
}
array =  [2, 1, 16, 3, 9];
console.log(sumEven(array));
document.write("<p>"+"sumEven: "+ sumEven([2, 1, 16, 3, 9])+"</p>");
