"use strict";
var cars = [
    {
        brand: "citroen",
        color: "grey",
        engine: "2.5"
    },
    {
        brand: "dacia",
        color: "blue",
        engine: "2.2"
    },
    {
        brand: "citroen",
        color: "red",
        engine: "2.1"
    },
    {
        brand: "opel",
        color: "red",
        engine: "1.9"
    },
    {
        brand: "subaru",
        color: "black",
        engine: "2.4"
    },
    {
        brand: "ford",
        color: "blue",
        engine: "2.1"
    }
];
//red color cars list
var filterRed=cars.filter(function (carsRed) {
return carsRed.color==="red";

});
console.log("The list of redCars are: ",filterRed);

// blue color cars list
var filterBlue = cars.filter(function (carsBlue) {
    return carsBlue.color==="blue";

});
console.log("The list of blue cars are:  ",filterBlue);

//engine>2.2
var filterEngine = cars.filter(function (engine) {
    return engine.engine > 2.2;
});
console.log("The  engines more than 2.2 capacity are: ",filterEngine);
//console.log(filterEngine);
