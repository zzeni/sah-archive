/*global CoffeeMachine,document*/

"use strict";
var RECIPES = {
    coffee: {
        name: "coffee",
        coffee: 20,
        water: 60,
        milk: 0,
        cups: 1


    },
    cappuccino: {
        name: "cappuccino",
        coffee: 20,
        water: 30,
        milk: 40,
        cups: 1

    },
    coffee_with_milk: {
        name: "coffee with milk",
        coffee: 20,
        water: 50,
        milk: 20,
        cups: 1

    },
    latte: {
        name: "late",
        coffee: 20,
        water: 30,
        milk: 60,
        cups: 1

    },
    americano: {
        name: "americano",
        coffee: 20,
        water: 130,
        milk: 0,
        cups: 1

    },
    double: {
        name: "double coffee",
        coffee: 35,
        water: 80,
        milk: 0,
        cups: 1

    }
};

function CoffeeMachine() {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0;

}

var machine = new CoffeeMachine();



CoffeeMachine.prototype.status = function () {
    return "<span style=color:#5BC0DE;font-family:Helvetica Neue>Coffee: </span>" + this.coffee + "gr, " + "<br><br>" + "<span style=color:#5BC0DE;font-family:Helvetica Neue>Milk:</span> " + this.milk + "ml, " + "<br><br>" + "<span style=color:#5BC0DE;font-family:Helvetica Neue>Water:</span> " + this.water + "ml, " + "<br><br>" + "<span style=color:#5BC0DE;font-family:Helvetica Neue>Cups:</span> " + this.cups + "<br><br>" + "<span style=color:#5BC0DE;font-family:Helvetica Neue>Current machine amount:</span> ";
};

CoffeeMachine.prototype.smallLoad = function () {
    this.coffee += 100;
    this.water += 500;
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

CoffeeMachine.prototype.htmlStatus = function () {
    return "<h2 style=background-color:#DFF0D8;padding:10px;border-radius:5px>" + this.status() + "</h2>";
};


CoffeeMachine.prototype.order = function (beverage_name) {
    var recipe = RECIPES[beverage_name];
    var serve = "serves one " + recipe.name;
    var notEnough = "Not enough ingredients to prepare " + recipe.name;
    var notFound = recipe.name + " is not available!";

    if (!recipe) {
        throw new Error(notFound);
    }
    if (this.coffee - recipe.coffee < 0 || this.water - recipe.water < 0 ||
        this.milk - recipe.milk < 0 || this.cups - recipe.cups < 0) {
        throw new Error(notEnough);
    } else {
        this.coffee -= recipe.coffee;
        this.water -= recipe.water;
        this.milk -= recipe.milk;
        this.cups -= recipe.cups;
        return serve;
    }
};



function Beverage(name) {
    var PRICES = {
        "coffee": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 40
            },
            price: 0.5
        },
        "coffeeWithMilk": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 80
            },
            price: 0.6
        },
        "americano": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 40
            },
            price: 0.6
        },
        "cappuccino": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 40
            },
            price: 0.8
        },
        "latte": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 40
            },
            price: 0.8
        },
        "doubleCoffee": {
            recipe: {
                coffee: 20,
                milk: 0,
                water: 40
            },
            price: 0.7
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
}

var coffee = new Beverage("coffee");
var coffeeWithMilk = new Beverage("coffeeWithMilk");
var americano = new Beverage("americano");
var cappuccino = new Beverage("cappuccino");
var latte = new Beverage("latte");
var doubleCoffee = new Beverage("doubleCoffee");


    
    
    
    
