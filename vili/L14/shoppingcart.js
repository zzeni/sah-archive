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
	var total=0;
	for(var i=0; i<shoppingCart.length; i++){
		 var item=shoppingCart[i];
		total=total+item.quantity;
	}
	return total;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it

function veganQuantity(shoppingCart) {
		var count=0, result=0;
	for(var i=0; i<shoppingCart.length; i++){
	
		if (shoppingCart[i].type =="fruit")
	   count+=shoppingCart[i].quantity;
	    if (shoppingCart[i].type =="vegetable")
	   result+=shoppingCart[i].quantity;
	  
	    
	}
return count+result;
}

console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17

