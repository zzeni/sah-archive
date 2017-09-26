
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

//RED CAR - FOR Loop
function redCar(carsArr){
    var carSet;
    for (var i = 0; i<carsArr.length; i++) {
        if (carsArr[i].color === "red") {
            carSet = carsArr[i];
            console.log(carSet);
        }
    }
};
console.log(redCar(cars));


//Blue CAR - forEACH
var myCars = cars.forEach( function(carArr) {
    if (carArr.color === "blue") {
        console.log(carArr);
    }
});

console.log(myCars);


//
// // RedCar filter
var redCar = cars.filter(function(car){
    return (car.color === "red");
});
console.log(redCar);
console.log('\n');

// BlueCar filter
var blueCar = cars.filter(function(car){
    return (car.color === "blue");
});
console.log(blueCar);
console.log('\n');

//Engine > 2.0
var engineMax = cars.filter( function(engCars) {
   return (engCars.engine >= 2.2);
});
console.log(engineMax);
console.log('\n');


//Blue cars with engine over 2.1

var myblueCar = cars.filter(function(car){
    var onlyCar;
    if (car.color === "blue" && car.engine > 2.1) {
        return (onlyCar = car);
    }
});
console.log(myblueCar);
