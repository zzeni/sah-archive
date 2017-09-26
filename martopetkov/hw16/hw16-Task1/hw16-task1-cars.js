"use strict";

var cars = [
    {
        brand: "citroen",
        color: "grey",
        engine: 2.5
},
    {
        brand: "dacia",
        color: "blue",
        engine: 2.2
},
    {
        brand: "citroen",
        color: "red",
        engine: 2.1
},
    {
        brand: "opel",
        color: "red",
        engine: 1.9
},
    {
        brand: "subaru",
        color: "black",
        engine: 2.4
},
    {
        brand: "ford",
        color: "blue",
        engine: 2.1
}
];

var redColored = cars.filter(function (element) {
    return (element.color === "red");
});

console.log(redColored);

var blueColored = cars.filter(function (element) {
    return (element.color === "blue");
});

console.log(blueColored)


var engineHigh = cars.filter(function (element) {
    return (element.engine > 2.2);
});

console.log(engineHigh)

document.getElementById("redcars").innerHTML = redColored

document.getElementById("bluecars").innerHTML = blueColored

document.getElementById("highengine").innerHTML = engineHigh


//////////////////////////////////////////////
//var redColored = [];
//
//for (var i = 0; i < cars.length ; i++) {
//    if (cars[i].color === "red") {
//        redColored.push(cars[i]);
//    }
//}
//
//console.log(redColored);
//
//document.getElementById("redcars").innerHTML = redColored
//////////////////////////////////////////////

//////////////////////////////////////////////
//Using If Else START
//
//function colorOfthecar(cars){
//var result;
//
//if (cars.color === "red") {
//        result = cars.brand + " is red";
//}
//else {
//    result = -1;
//}
//
//return result;
//    
////    cars.forEach(function(element) {
////    console.log(element);
//   
//}
//
//for (let i = 0; i < 6; i++) {
//    console.log(colorOfthecar(cars[i]));
//     document.getElementById("redcars").innerHTML = colorOfthecar(cars[i])
//}
//
////Using If Else END
//////////////////////////////////////////////