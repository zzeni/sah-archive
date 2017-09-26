// Task 1 from Homework #12

function convert (red, green, blue) {
    var myHex1 = red.toString(16);
    var myHex2 = green.toString(16);
    var myHex3 = blue.toString(16);
    var hexNum = '#' + myHex1 + myHex2 + myHex3;
    // console.log(hexNum);
    document.getElementsByClassName('new')[0].innerHTML = 'your searching color is: ' + hexNum;
    // hexNum.style.color = 'red'; - why it sonsole said that hexNum is undefined ???
}
convert(234, 214, 28);

// Task 2 from Homework #12

var circlePer = function(radius) {
    var resultPer = Math.round((2 * radius * Math.PI)*1000)/1000;
    document.getElementsByClassName('new')[1].innerHTML = 'your perimeter is: ' + resultPer;
}
function circleArea (radius) {
    var resultArea = Math.round((Math.PI * radius * radius)*1000)/1000;
    document.getElementsByClassName('new')[2].innerHTML = 'your area is: ' + resultArea;
}
var number = 65;

circlePer(number);
circleArea(number);
