//Bikes task
"use strict";

var bikes = [
  {
    name: "Drag",
    price: 200
  },
  {
    name: "RAM",
    price: 500
  },
  {
    name: "Scott",
    price: 1200
  }
];

console.log("Need a bike?..");

function logBikes(bikes) {
  for (let i = 0; i < bikes.length; i++) {
    console.log(bikes[i].name + ': ' + bikes[i].price + '$');
    }
}
console.log(logBikes(bikes));


//shoppingCart tast
"use strict";

var shoppingCart = [
	{
		name: "apple",
		type: "fruit",
		quantity: 5
	},
	{
		name: "banana",
		type: "fruit",
		quantity: 2
	},
	{
		name: "potato",
		type: "vegetable",
		quantity: 10
	},
	{
		name: "cheese",
		type: "diry",
		quantity: 1
	},
	{
		name: "yogurt",
		type: "diry",
		quantity: 3
	},
	{
		name: "steak",
		type: "meat",
		quantity: 1
	},
	{
		name: "ice cream",
		type: "sweet",
		quantity: 1
	},
	{
		name: "bounty",
		type: "sweet",
		quantity: 3
	}
];

// Initial part of the task
function quantity(shoppingCart) {
	let sum = 0;
	for (let i = 0; i<shoppingCart.length; i++) {
	  sum += shoppingCart[i].quantity;
	}
	return sum;
}
console.log('overall', quantity(shoppingCart));
// End of initial part

//Secondary part of the task
function veganS (shoppingCart){
  let sum = 0;
  for (let i = 0; i<shoppingCart.length; i++){
    if (shoppingCart[i].type === 'fruit' || shoppingCart[i].type === 'vegetable') {
      sum += shoppingCart[i].quantity;
    }
  }
  return sum;
}
console.log('vegan', veganS(shoppingCart));

//End of secondary part
