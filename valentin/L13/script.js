var array = [1,2,3,4,10,6];

//Part 1 - change our callback from tha previous homework

function callback(a, b){
  return (a < b);
}


// Return true if at least one list item is less than our value
function anyLess(list, value, callback){
  for (var i = 0; i < list.length;i++){
    if (callback(list[i], value)) {
      return true;
    }
  }
return false;
}

console.log(anyLess(array, 3, callback));// Return true if at least one list item is less than 3


// Return true if all list items are less than our value
function allLess(list, value, callback){
  for (var i = 0; i < list.length;i++){
    if (callback(list[i], value) === false) {
      return false;
    }
  }
return true;
}

console.log(allLess(array, 3, callback));// Return true if all list items are less than 3


// Part 2 - make filters functions for cars array with objects
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

function colorRedCars(cars){
  var filtered = [];
  for (var i = 0; i < cars.length;i++){
    if (cars[i].color === "red") {
      filtered.push(cars[i]);
    }
  }
return filtered;
}

function colorBlueCars(cars){
  for (var i = 0; i < cars.length;i++){
  var filtered = [];
    if (cars[i].color === "blue") {
      filtered.push(cars[i]);
    }
  }
return filtered;
}

function engineFilteredCars(cars){
  var filtered = [];
  for (var i = 0; i < cars.length;i++){
    if (cars[i].engine > 2.2) {
      filtered.push(cars[i]);
    }
  }
return filtered;
}

console.log("The red cars: ", colorRedCars(cars));
console.log("The blue cars: ", colorBlueCars(cars));
console.log("The 'over 2.2 engine' cars: ", engineFilteredCars(cars));