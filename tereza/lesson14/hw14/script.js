//Задача 1:
function forCheckEven(array) {
  for (var i = 0; i < array.length; i+= 1)
    if (array[i]%2 == 1) {
      return false;
    }
  return true;
}

document.write("<p>", "All numbers in array[2, 14, 6, 24, 8] are even: " + forCheckEven([2, 14, 6, 24, 8]), "</p>");


function whileCheckEven(array) {
  var i = 0;
  while (i < array.length) {
    i+= 1;
    if (array[i]%2 == 1) {
      return false;
    }
  }
  return true;
}
document.write("<p>", "All numbers in array[32, 44, 26, 9, 4] are even: " + whileCheckEven([32, 44, 26, 9, 4]), "</p>");

function doCheckEven(array) {
  var i = 0;
  do {
    i+= 1;
    if (array[i]%2 == 1) {
      return false;
    }
  }
  while (i < array.length);
  return true;
}

document.write("<p>", "All numbers in array[84, 14, 3, 56, 4] are even: " + doCheckEven([84, 14, 3, 56, 4]), "</p>");




//Задача 2:
function sum(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}

document.write("<p>", "The sum of [2, 1, 16, 3, 9] is: " + sum([2, 1, 16, 3, 9]), "</p>");

function sumEven(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i]%2 == 0) {
      total += array[i];
    }
  }
  return total;
}
document.write("<p>", "The sum of all even numbers is array [2, 1, 16, 3, 9] is: " + sumEven([2, 1, 16, 3, 9]), "</p>");

function sumOdd(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i]%2 == 1) {
      total += array[i];
    }
  }
  return total;
}
document.write("<p>", "The sum of all odd numbers is array [2, 1, 16, 3, 9] is: " + sumOdd([2, 1, 16, 3, 9]), "</p>");