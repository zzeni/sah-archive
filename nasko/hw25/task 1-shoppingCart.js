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

function total (shoppingCart) {
var sum=0;
shoppingCart.forEach(function (a) {
sum =sum + (a.price)*(a.quantity);
});
return sum; 
}


console.log(total(shoppingCart)); // 13.30