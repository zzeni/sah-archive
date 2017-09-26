function getRedCars(cars) {
  return cars.filter(function (car) {
    if(car.color == "red"){
      return car; 
    }
  })
  return cars;
}

function getPowCars(cars) {
  return cars.filter(function (car) {
    if(car.engine >= 2.2){
      return car; 
    }
  })
  return cars;
}

function getCarsByBrand(cars, brand) {
  return cars.filter(function (car) {
    if(car.brand == brand){
      return car; 
    }
  })
  return cars;
}

var testCars = [
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
console.log("Red cars: ");
console.log(getRedCars(testCars));
console.log("Pow cars");
console.log(getPowCars(testCars));
console.log("Brand cars");
console.log(getCarsByBrand(testCars, "citroen"));