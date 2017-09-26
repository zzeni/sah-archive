/**
 * Created by STEVIS on 5/30/2017.
 */

"use strict"

// task 1 ----------------------------------------------------

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

function total(shoppingCart) {
    var sum = 0;
    for (var i = 0; i<shoppingCart.length; i++) {
        var total =  sum += (shoppingCart[i].quantity*shoppingCart[i].price);
    }
    return total;
}

function total(item) {
    var sum = 0;
    item.forEach(function(cart){
        sum += (cart.quantity*cart.price);
    });
    return sum;
}

console.log(total(shoppingCart)); // 13.30

// task 2 ----------------------------------------------------

var text = "The quick brown  fox jumps over the lazy dog";

function wordCounter(text){

    return text.match(/\b[^\d\W]+\b/g).length;

}

console.log(wordCounter(text)); // 9

//  task 3 ----------------------------------------------------

function capitalize(text){
    var word = text.toLowerCase().split(" ");
    for (var i = 0; i < word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(" ");
}

function capitalize(text){
    return text.toLowerCase().split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

function capitalize(text){
    return text.toLowerCase().split(" ").map(function(word){
        return word.replace(word[0], word[0].toUpperCase());
    }).join(" ");
}

console.log(capitalize(text)); // "The Quick Brown Fox Jumps Over The Lazy Dog"

//  task 6 ----------------------------------------------------

var text = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)";

function vowelCounter(text){

    var result = text.match(/[аъоуеиюя]/gi);
}

console.log(vowelCounter(text)); // 31

//  task 8 ----------------------------------------------------

var list = [3, 45, 2, 6, 18, 5];

function sort(list){
    return list.sort(function(a,b){
        if(a > b){return 1;}
        if(a < b){return -1;}
        return 0;
    });
}
console.log(sort(list)); // [2, 3, 5, 6, 18, 45]





