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


// This function accepts a shopping cart list and returns the overall quantity of all the items in it
function quantity(shoppingCart) {
    var result = 0;
    shoppingCart.forEach(function (item) {
        result += item.quantity;
    });
    return result;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
    var result = 0;
    var quantity = shoppingCart.filter(function (item) {
        if (item.type == "vegetable" || item.type == "fruit") {
            return result += item.quantity;
        }
    });
    return result;
}

console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17