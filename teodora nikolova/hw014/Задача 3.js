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

function quantity(itemsList) {

    var allQuantity=0;

    itemsList.forEach(function(items){
        var quantityItems=items.quantity;
        allQuantity+=quantityItems;
    });
    return allQuantity;
}


function veganQuantity(shoppingCart) {
    var result=0;

     var filtrered=shoppingCart.filter(function (item){
        return(item.type==="fruit"||item.type==="vegetable");

    });
    result=quantity(filtrered);
    return result;

}


console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17

