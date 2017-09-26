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
// Filter red cars
cars.filter(function (colorRed) {
    return colorRed.color === "red";
});

// Filter blue cars
cars.filter(function (colorRed) {
    return colorRed.color === "blue";
});
// Filter cars with engines bigger than 2.1
cars.filter(function (a) {
    return a.engine > 2.1;
});
// Playing around a little more, because JavaScript is fun
cars.sort(function (a, b) {
    return a.engine > b.engine;
});