// Напишете филтрираща функция, която да може да върне списък, съдържащ само колите с червен цвят от следния списък с обекти:

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

function describe(car) {
    if (car.color === "red") {
        console.log("This " + car.brand + " is red");
    }
}

describe(cars[0]);
describe(cars[1]);
describe(cars[2]);
describe(cars[3]);
describe(cars[4]);
describe(cars[5]);