var array = [2, 14, 6, 24];
document.write("Exercise 1.1: FOR <br>");

function forCheckEven(array) {
    var areAllElementsEven = true;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            areAllElementsEven = false;
        }
    }
    return areAllElementsEven;
}

document.write("Are all elements in [ " + array.toString() + " ] even? -> " + forCheckEven(array).toString() + "<br><br>");

document.write("Exercise 1.2: WHILE <br>");

function whileCheckEven(array) {
    var areAllElementsEven = true;
    var i = 0;
    while (i < array.length) {
        i += 1;
        if (array[i] % 2 != 0) {
            areAllElementsEven = false;
        }
    }
    return areAllElementsEven;
}

document.write("Are all elements in [ " + array.toString() + " ] even? -> " + whileCheckEven(array).toString() + "<br><br>");

document.write("Exercise 1.3: DO -> WHILE <br>");

function doCheckEven(array) {
    var areAllElementsEven = true;
    var i = 0;
    do {
        i += 1;
        if (array[i] % 2 != 0) {
            areAllElementsEven = false;
        }
    } while (i < array.length);
    return areAllElementsEven;
}

document.write("Are all elements in [ " + array.toString() + " ] even? -> " + whileCheckEven(array).toString() + "<br><br>");

document.write("Exercise 1.4: Calculate sum using forEach <br>");

var sumContainer = {};
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function calculateSums(array) {
    sumContainer.sum = 0;
    sumContainer.oddSum = 0;
    sumContainer.evenSum = 0;

    array.forEach(function (element) {
        sumContainer.sum += element;
        if (element % 2 != 0) {
            sumContainer.oddSum += element;
        } else {
            sumContainer.evenSum += element;
        }
    })
}
calculateSums(array);
document.write("Sum of all elements: " + sumContainer.sum + "<br>" +
    "Sum of odd elements: " + sumContainer.oddSum + "<br>" +
    "Sum of even elements: " + sumContainer.evenSum + "<br><br>");

