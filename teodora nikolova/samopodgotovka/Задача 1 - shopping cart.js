"use strict";

var shoppingCart = [
    {
        name: "product 1",
        quantity: 2,
        price: 2.95
    },
    {
        name: "product 1",
        quantity: 3,
        price: 1.20
    },
    {
        name: "product 3",
        quantity: 1,
        price: 4.20
    }
];
function total(shoppingCart){
    var totalPrice=0;
    for(var i=0;i<shoppingCart.length;i++){
        var allQuantity=shoppingCart[i].quantity;
        var allPrice=shoppingCart[i].price;
        totalPrice+=allQuantity*allPrice;

    }

    return(totalPrice);
}
console.log(total(shoppingCart)); // 13.70