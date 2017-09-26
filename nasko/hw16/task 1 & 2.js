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

    var sum = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        sum+= shoppingCart[i].quantity;
    }
    return sum;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
    var vegProd = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].type === "fruit" || shoppingCart[i].type === "vegetable") {
            vegProd += shoppingCart[i].quantity;
        } else {}
    }
    return vegProd;
}

// For Each
function quantityForEach(shoppingCart) {
    var sum = 0;
    shoppingCart.forEach(function (a) {
        sum += a.quantity;
    });
    return sum;
}
// Filter
function veganQuantityFilter(shoppingCart) {
    var veganProducts = shoppingCart.filter(function (a) {
        return a.type === "fruit" || a.type === "vegetable";
    });
    return quantityForEach(veganProducts);
}


console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17

console.log('overall with for each: ', quantityForEach(shoppingCart));
console.log('vegan with filter: ', veganQuantityFilter(shoppingCart));
