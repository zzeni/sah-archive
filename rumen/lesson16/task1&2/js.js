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
    for (var i = 0; i < shoppingCart.length; i += 1) {
        sum += shoppingCart[i].quantity;
    }
    return sum;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
    var veganProducts = 0;
    for (var i = 0; i < shoppingCart.length; i += 1) {
        if (shoppingCart[i].type === "fruit" || shoppingCart[i].type === "vegetable") {
            veganProducts += shoppingCart[i].quantity;
        } else {}
    }
    return veganProducts;
}

function quantityForEach(shoppingCart) {
    var sum = 0;
    shoppingCart.forEach(function (stock) {
        sum += stock.quantity;
    });
    return sum;
}

function veganQuantityFilter(shoppingCart) {
    var veganProducts = shoppingCart.filter(function (stock) {
        return stock.type === "fruit" || stock.type === "vegetable";
    });
    return quantityForEach(veganProducts);
}
var resultSum = document.createElement("div");
resultSum.innerHTML = ("Quantity of all products is: " + quantity(shoppingCart));
document.body.appendChild(resultSum);

var resultSum = document.createElement("div");
resultSum.innerHTML = ("Quantity of vegan products is: " + veganQuantity(shoppingCart));
document.body.appendChild(resultSum);

var resultSum = document.createElement("div");
resultSum.innerHTML = ("Quantity of all products, using forEach method, is: " + quantityForEach(shoppingCart));
document.body.appendChild(resultSum);

var resultSum = document.createElement("div");
resultSum.innerHTML = ("Quantity of vegan products, using filter method, is: " + veganQuantityFilter(shoppingCart));
document.body.appendChild(resultSum);
