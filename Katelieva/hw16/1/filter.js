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

function color(itemsList) {
    var result = 0;

    for (var i = 0; i < cars.length; i++) {
        var item = cars[i]; {
            result = result + item.color;
        }
    }
    return result;

}

function CarColor(cars) {
    var result = 0;
    var filtered = cars.filter(function (item) {
        return (item.color === "red" || item.color === "blue");
    });

    result = filtered;
    return result;
}

console.log("color is :", CarColor(cars));