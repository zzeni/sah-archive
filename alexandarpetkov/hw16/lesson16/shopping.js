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
function quantity(itemsList) {
  var result = 0;
//  for(var i=0;i<shoppingCart.length;i++) {
//    result += shoppingCart[i].quantity;
//  }

  itemsList.forEach(function(item) {
    result = result + item.quantity;
  });
  return result;
}

// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
  var result = 0;

//  for(var i=0;i<shoppingCart.length;i++) {
//    var item = shoppingCart[i];
//
//    if(item.type === "fruit" || item.type === "vegetable") {
//      result = result + item.quantity;
//    }
//  }

  var filtered = shoppingCart.filter(function(item) {
    return (item.type === "fruit" || item.type === "vegetable");
  });

  result = quantity(filtered);

  return result;
}

console.log('overall', quantity(shoppingCart)); // should return 26
console.log('vegan', veganQuantity(shoppingCart)); // should return 17

