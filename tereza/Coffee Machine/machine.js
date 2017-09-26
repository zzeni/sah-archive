/*globals document, CoffeeMachine*/

"use strict";

function CoffeeMachine() {
  this.coffee = 0;
  this.water = 0;
  this.milk = 0;
  this.cups = 0;
  this.turnover = 0;
}

CoffeeMachine.prototype.status = function () {
  return "coffee: " + this.coffee + " gr" + "<br>" + "water: " + this.water + " ml " + "<br>" + "milk: " + this.milk + " ml" + "<br>" + "cups: " + this.cups + "<br>" + "Total: " + this.turnover;
};

CoffeeMachine.prototype.smallLoad = function () {
  this.coffee = 100;
  this.water = 500;
  this.milk = 200;
  this.cups = 10;
  return this.status();
};

CoffeeMachine.prototype.mediumLoad = function () {
  this.coffee = 500;
  this.water = 1000;
  this.milk = 300;
  this.cups = 30;
  return this.status();
};

CoffeeMachine.prototype.bigLoad = function () {
  this.coffee = 1000;
  this.water = 2000;
  this.milk = 500;
  this.cups = 60;
  return this.status();
};

CoffeeMachine.prototype.htmlStatus = function () {
  var turnover = Math.floor(this.turnover) + "." + Math.round(this.turnover*100)%100 + " лв.";

  return '' +
    '<ul class="list-group">' +
    '  <li class="list-group-item coffee"><strong>Coffee: </strong>' + this.coffee + " gr</li>" +
    '  <li class="list-group-item water"><strong>Water: </strong>' + this.water + " ml</li>" +
    '  <li class="list-group-item milk"><strong>Milk: </strong>' + this.milk + " ml</li>" +
    '  <li class="list-group-item cups"><strong>Cups: </strong>' + this.cups + "</li>" +
    '  <li class="list-group-item turnover"><strong>Turnover : </strong>' + turnover + "</li>" +
    '</ul>';
};

var machine = new CoffeeMachine();

//var RECIPES = {
//  coffee: {
//    coffee: 20,
//    water: 60,
//    milk: 0,
//    cups: 1
//  },
//  coffee_with_milk: {
//    coffee: 20,
//    water: 50,
//    milk: 20,
//    cups: 1
//  },
//  cappuccino: {
//    coffee: 20,
//    water: 30,
//    milk: 40,
//    cups: 1
//  },
//  latte: {
//    coffee: 20,
//    water: 30,
//    milk: 60,
//    cups: 1
//  },
//  americano: {
//    coffee: 20,
//    water: 130,
//    milk: 0,
//    cups: 1
//  },
//  double: {
//    coffee: 35,
//    water: 80,
//    milk: 0,
//    cups: 1
//  }
//};
//
//
//CoffeeMachine.prototype.order = function (beverage) {
//  var recipe = RECIPES;
//  this.coffee -= recipe[beverage].coffee;
//  this.water -= recipe[beverage].water;
//  this.milk -= recipe[beverage].milk;
//  this.cups -= recipe[beverage].cups;
//
//  return "serves one " + beverage;
//
//};


function Beverage(name) {
  var PRICES = {

    "coffee": {

      price: 0.5,

      recipe: {
        coffee: 20,
        water: 60,
        milk: 0,
        cups: 1
      }
    },

    "coffee_with_milk": {

      price: 0.6,

      recipe: {
        coffee: 20,
        water: 50,
        milk: 20,
        cups: 1
      }
    },

    "cappuccino": {

      price: 0.8,

      recipe: {
        coffee: 20,
        water: 30,
        milk: 40,
        cups: 1
      }
    },

    "latte": {

      price: 0.8,

      recipe: {
        coffee: 20,
        water: 30,
        milk: 60,
        cups: 1
      }
    },

    "americano": {

      price: 0.6,

      recipe: {
        coffee: 20,
        water: 130,
        milk: 0,
        cups: 1
      }
    },

    "double": {

      price: 0.7,

      recipe: {
        coffee: 35,
        water: 80,
        milk: 0,
        cups: 1
      }
    }

  };

  var _name = name;
  var _price = PRICES[name].price;
  var _recipe = PRICES[name].recipe;

  this.getName = function () {
    return _name;
  };
  this.getPrice = function () {
    return _price;
  };
  this.getRecipe = function () {
    return _recipe;
  };
}


CoffeeMachine.prototype.order = function (beverageName) {
  var beverage = new Beverage(beverageName);
  this.coffee -= beverage.getRecipe().coffee;
  this.water -= beverage.getRecipe().water;
  this.milk -= beverage.getRecipe().milk;
  this.cups -= beverage.getRecipe().cups;
  this.turnover += beverage.getPrice();
   
  
  if (this.coffee <= 35) {
    throw new Error("Not enough consumables");
  }
  if (this.water <= 130) {
    throw new Error("Not enough consumables");
  }
  if (this.milk <= 40) {
    throw new Error("Not enough consumables");
  }
  if (this.cups === 0) {
    throw new Error("Not enough consumables");
    } else { 
      return "serves one " + beverage.getName();
    }
   
};
