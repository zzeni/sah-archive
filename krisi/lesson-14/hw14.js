//TASK 1
//Check if all numbers in an array are even, using FOR:
function forCheckEven(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            return false;
        }
    }
    return true;
}

document.write("All numbers in the array are even: " + forCheckEven([2, 14, 6, 24, 8]), "</br>");
document.write("All numbers in the array are even: " + forCheckEven([2, 3, 6, 24, 8]), "</br>");

//Check if all numbers in an array are even, using WHILE:
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

document.write("All numbers in the array are even: " + whileCheckEven([2, 14, 6, 24, 8]), "</br>");
document.write("All numbers in the array are even: " + whileCheckEven([2, 3, 6, 24, 8]), "</br>");

//Check if all numbers in an array are even, using DO-WHILE:
function doCheckEven(array) {
    i = 0;
    do {
        if (array[i] % 2 == 1) {
            return false;
        }
        i += 1;

    }
    while (i < array.length)
    return true;
}

document.write("All numbers in the array are even: " + doCheckEven([2, 14, 6, 24, 8]), "</br>");
document.write("All numbers in the array are even: " + doCheckEven([2, 3, 6, 24, 8]), "</br>");

//TASK 2
//Find the sum of ALL array elements:

function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

document.write("The sum of ALL elements of this array is: " + arraySum([2, 1, 16, 3, 9]), "</br>");

//Find the sum of all EVEN elements of the array:

function evenSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

document.write("The sum of all EVEN elements of this array is: " + evenSum([2, 1, 16, 3, 9]), "</br>");

//Find the sum of all ODD elements of the array:

function oddSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sum += array[i];
        }
    }
    return sum;
}

document.write("The sum of all ODD elements of this array is: " + oddSum([2, 1, 16, 3, 9]), "</br>");
