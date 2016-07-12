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
var overall = 0;

shoppingCart.forEach(function (x) {
  overall = overall + x.quantity;
});

return overall;
}


// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
var vegan = [];
var overall = 0;

vegan = shoppingCart.filter(function (i) {
  return (i.type === "vegetable" || i.type === "fruit")         
});

vegan.forEach(function (i) {
  overall = overall + i.quantity;
});

return overall;
}


console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17