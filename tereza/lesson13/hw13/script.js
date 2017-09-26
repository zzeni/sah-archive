//Задача 1:
function square(x) {
  var result = x*x;
  return result;
}

console.log ("50 квадрат е:", square(50));
document.write ("<p>","50 квадрат е: ", square(50),"</p>");

function triple(x) {
  var result = x*x*x;
  return result;
}

console.log ("51 на трета степен е:", triple(51));
document.write ("<p>","51 на трета степен е: ", triple(51),"</p>");

function perimeter(r) {
  var pi = Math.PI;
  var result = 2*pi*r;
  return result;
}

console.log ("Периметърът на кръг с радиус 8 е:", perimeter(8));
document.write ("<p>","Периметърът на кръг с радиус 8 е: ", perimeter(8),"</p>");

console.log ("Периметърът на кръг с радиус 3 е:", perimeter(3));
document.write ("<p>","Периметърът на кръг с радиус 8 е: ", perimeter(3),"</p>");

console.log ("Периметърът на кръг с радиус 5 е:", perimeter(5));
document.write ("<p>","Периметърът на кръг с радиус 8 е: ", perimeter(5),"</p>");


function area(a, b, c) {
  var result = (a*b) + (a*(c-b)/2);
  return result;
}

console.log ("Лицето на фигурата е:", area(10, 6, 10));
document.write ("<p>","Лицето на фигурата е: ", area(10, 6, 10),"</p>");

console.log ("Лицето на фигурата е:", area(2, 1, 3));
document.write ("<p>","Лицето на фигурата е: ", area(10, 6, 10),"</p>");

console.log ("Лицето на фигурата е:", area(10, 6, 10));
document.write ("<p>","Лицето на фигурата е: ", area(10, 6, 10),"</p>");

function calc(x) {
  if (x%2 === 0) {
    return x*x;
  } else {
    return x*x*x;
  }
}

console.log ("за число 5:", calc(5));
document.write ("<p>","за число 5: ", calc(5),"</p>");

console.log ("за число 8:", calc(8));
document.write ("<p>","за число 8:  ", calc(8),"</p>");

console.log ("за число 3:", calc(3));
document.write ("<p>","за число 3: ", calc(3),"</p>");

//Задача 2:
function convertRed(r,g,b) {
  var rHex = r.toString(16);
  var gHex = g.toString(16);
  var bHex = b.toString(16);
  var result = rHex + gHex + gHex + bHex + bHex;
  return result;
}
console.log("Hex number for red is: #" + convertRed(255, 0, 0));
document.write("<p>","Hex number for red is: #" + convertRed(255, 0, 0),"</p>");

function convertGreen(r,g,b) {
  var rHex = r.toString(16);
  var gHex = g.toString(16);
  var bHex = b.toString(16);
  var result = rHex + rHex + gHex + bHex + bHex;
  return result;
}
console.log("Hex number for green is: #" + convertGreen(0, 255, 0));
document.write("<p>","Hex number for red is: #" + convertGreen(0, 255, 0),"</p>");

function convertBlue(r,g,b) {
  var rHex = r.toString(16);
  var gHex = g.toString(16);
  var bHex = b.toString(16);
  var result = rHex + rHex + gHex + gHex + bHex;
  return result;
}
console.log("Hex number for blue is: #" + convertBlue(0, 0, 255));
document.write("<p>","Hex number for red is: #" + convertBlue(0, 0, 255),"</p>");

//Задача 3:
function circle(x) {
  var result = Math.PI*(x*x);
  return Math.round(result);
}

console.log(circle(5));
document.write("<p>","Площта на кръга е: " + circle(5),"</p>");
