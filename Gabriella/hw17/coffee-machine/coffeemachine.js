"use strict";

var RECIPE_FACTORY = {
    "coffee": {
        "recipe": {
            "coffee": 20,
            "water": 60,
            "cups": 1
        },
        "price": 0.5
    },
    "coffee_with_milk": {
        "recipe": {
            "coffee": 20,
            "water": 50,
            "milk": 20,
            "cups": 1
        },
        "price": 0.6
    },
    "americano": {
        "recipe": {
            "coffee": 20,
            "water": 130,
            "cups": 1
        },
        "price": 0.6
    },
    "cappuccino": {
        "recipe": {
            "coffee": 20,
            "water": 30,
            "milk": 40,
            "cups": 1
        },
        "price": 0.8
    },
    "latte": {
        "recipe": {
            "coffee": 20,
            "water": 30,
            "milk": 60,
            "cups": 1
        },
        "price": 0.8
    },
    "double": {
        "recipe": {
            "coffee": 35,
            "water": 80,
            "cups": 1
        },
        "price": 0.7
    }
}

function Baverage(name) {
    var _name = name;
    var baverageDetails = RECIPE_FACTORY[name];
    var _price = baverageDetails.price;
    var _recipe = baverageDetails.recipe

    this.getName = function () {
        return _name;
    }
    this.getPrice = function () {
        return _price;
    }
    this.getRecipe = function () {
        return _recipe;
    }
}

function CoffeeMachine() {
    this.coffee = 0;
    this.milk = 0;
    this.water = 0;
    this.cups = 0;
    this.turnover = 0;
}

CoffeeMachine.prototype.smallLoad = function () {
    this.coffee += 100;
    this.water += 500;
    this.milk += 200;
    this.cups += 10;
}

CoffeeMachine.prototype.mediumLoad = function () {
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
}

CoffeeMachine.prototype.bigLoad = function () {
    this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
}

CoffeeMachine.prototype.htmlStatus = function () {
    return "Machine current reagent quantity status<br>" +
        "Coffee: " + this.coffee + "gr, Milk: " + this.milk + "ml, Water: " + this.water + "ml, Cups: " + this.cups + ", Turnover: " + this.turnover.toFixed(2) + "lv";
}

CoffeeMachine.prototype.order = function (baverageName) {
    var baverage = new Baverage(baverageName);
    if (typeof baverage == "undentified" || baverage == null) {
        throw new Error("Unknown baverage!");
    } else if (baverage.getRecipe().coffee > this.coffee ||
        baverage.getRecipe().water > this.water ||
        baverage.getRecipe().cups > this.cups ||
        (baverage.getRecipe().milk != null && baverage.getRecipe().milk > this.milk)) {
        throw new Error("Unsufficient reagents for your baverage!")
    } else {
        this.coffee -= baverage.getRecipe().coffee;
        this.water -= baverage.getRecipe().water;
        this.cups -= baverage.getRecipe().cups;
        if (baverage.getRecipe().milk != null) {
            this.milk -= baverage.getRecipe().milk;
        }
        this.turnover += baverage.getPrice();
    }
}