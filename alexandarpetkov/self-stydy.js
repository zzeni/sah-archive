
//Напишете функция total(shoppingCart),

// която смята общата стойност на продуктите в пазарската количка.

//Пример:
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
]
// console.log(total(shoppingCart)); // 13.30


// Full task

function total(shoppingCart) {
    var totalPrice = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        var shoppQuant = shoppingCart[i].quantity;
        var shoppPrice = shoppingCart[i].price;
        totalPrice += (shoppQuant*shoppPrice);
    }
    return totalPrice;
}
console.log(total(shoppingCart)); // 13.30

/* calculating all prices without quantity !!!

function total(shoppingCart) {
    var total = 0;
    for (var i = 0; i < shoppingCart.length; i++) {

        total += shoppingCart[i].price;
    }
    console.log(total);
}*/
