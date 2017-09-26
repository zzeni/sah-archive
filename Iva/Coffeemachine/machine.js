"use strict";

function CoffeeMachine() {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0;
}

CoffeeMachine.prototype.status = function () {
    return "coffee: " + this.coffee + "gr, " +
        "milk: " + this.milk + "ml, " +
        "water: " + this.water + "ml, " +
        "cups: " + this.cups;
};

CoffeeMachine.prototype.smallLoad = function () {
    this.coffee += 100;
    this.water += 300;
    this.milk += 200;
    this.cups += 10;
};

CoffeeMachine.prototype.mediumLoad = function () {
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
};

CoffeeMachine.prototype.bigLoad = function () {
    this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
};

var RECIPES = {
    coffee: {
        coffee: 20,
        water: 60,
        milk: 0,
        cups: 1
    },
    coffee_with_milk: {
        coffee: 20,
        water: 50,
        milk: 0,
        cups: 1
    },
    cappuccino: {
        coffee: 20,
        water: 30,
        milk: 0,
        cups: 1
    },
    latte: {
        coffee: 20,
        water: 30,
        milk: 60,
        cups: 1
    },
    americano: {
        coffee: 20,
        water: 130,
        milk: 0,
        cups: 1
    },
    double: {
        coffee: 20,
        water: 80,
        milk: 0,
        cups: 1
    }
};

CoffeeMachine.prototype.order = function (beverage) {
    var recipes = RECIPES[beverage];
    this.coffee -= recipes.coffee || 0;
    this.water -= recipes.water || 0;
    this.milk -= recipes.milk || 0;
    this.cups -= recipes.cups || 0;
};


CoffeeMachine.prototype.htmlStatus = function () {
    // MAKE A PRETTY HTML OUTPUT HERE!!!!!
    //  return this.status();
    //return "<p> %STATE% </p>".replace('%STATE%', this.status());
    return "<ul><li>%COFFEE%</li><li>%WATTER%</li><li>%MILK%</li><li>%CUPS%</li></ul>".replace('%COFFEE%', "coffee " + this.coffee + " gr").replace('%WATTER%', "water " + this.water + " ml").replace('%MILK%', "milk " + this.milk + " ml").replace('%CUPS%', "cups " + this.cups);
};

console.log("machine:", machine.status());
console.log(RECIPES.coffee);
console.log(RECIPES.coffee_with_milk);
console.log(RECIPES.cappuccino);
console.log(RECIPES.latte);
console.log(RECIPES.americano);
console.log(RECIPES.double);

/*
var PRICE = {
    coffee: {
        price: 50,
        recipe: {
            coffee: 20,
            water: 60,
            milk: 0
        }
    },
    coffee_with_milk: {
        price: 60,
        recipe: {
            coffee: 20,
            water: 50,
            milk: 20
        }
    },
    cappuccino: {
        price: 80,
        recipe: {
            coffee: 20,
            water: 30,
            milk: 40
        }
    },
    latte: {
        price: 80,
        recipe: {
            coffee: 20,
            water: 30,
            milk: 60
        }
    },
    americano: {
        price: 60,
        recipe: {
            coffee: 20,
            water: 30,
            milk: 130
        }
    },
    double: {
        price: 70,
        recipe: {
            coffee: 35,
            water: 80,
            milk: 0
        }
    }
};

function Beverage(name) {
    var _name = name;
    var _price = PRICE[name].price;
    var _recipe = PRICE[name].recipe;
    this.getName = function () {
        return _name;
        return _price;
        return _recipe;
    }
};
var machine = new CoffeeMachine(name, price, recipe) {
    var _name = name;
    var _price = price;
    var _recipe = recipe;
}
machine.getName();
*/
