/* Created by STEVIS on 4/25/2017. */
/*global document*/


var CoffeeNamespace = {};

(function () {

    "use strict";

    function Beverage(name) {

        var PRICES = {

            "coffee": {recipe: {coffee: 20, water: 60}, price: 0.50},

            "coffee_with_milk": {recipe: {coffee: 20, water: 50, milk: 20}, price: 0.60},

            "cappuccino": {recipe: {coffee: 20, water: 30, milk: 40}, price: 0.80},

            "latte": {recipe: {coffee: 20, water: 30, milk: 60}, price: 0.80},

            "americano": {recipe: {coffee: 20, water: 130}, price: 0.60},

            "double": {recipe: {coffee: 35, water: 80}, price: 0.70}
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

    function CoffeeMachine() {
        this.coffee = 0;
        this.water = 0;
        this.milk = 0;
        this.cups = 0;
        this.turnover = 0;
    }

    var machine = new CoffeeMachine();

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
        this.milk += 600;
        this.cups += 60;
    };

    CoffeeMachine.prototype.order = function (name) {

        var drink = new Beverage(name);
        var recipe = drink.getRecipe();

        if (drink === undefined) {
            throw new Error("!Unknown beverage!");
        }

        else if ((this.coffee >= (recipe.coffee || 0)) && (this.water >= (recipe.water || 0)) && (this.milk >= (recipe.milk || 0)) && (this.cups >= (recipe.cups || 0))) {

            this.coffee -= recipe.coffee || 0;
            this.water -= recipe.water || 0;
            this.milk -= recipe.milk || 0;
            this.cups -= recipe.cups || 0;
            this.turnover += drink.getPrice();
            return "serves one " + drink;
        }

        else {
            throw new Error("Not enough components!!!");
        }
    };

    CoffeeMachine.prototype.status = function () {

        return ("<p class=\"bg-warning\">"+"<img src=img/coffee.svg alt='coffee' width=\"60\" class=\"img-rounded\">"+"         coffee: " + this.coffee + " gr.</p>"
            + "<p class=\"panel panel-warning\">"+"<img src=img/milk.svg alt='milk'  width=\"60\" class=\"img-rounded\">"+"   milk: " + this.milk + "  ml.</p>"
            + "<p class=\"bg-info\">"+"<img src=img/water.svg alt='water' width=\"60\" class=\"img-rounded\">"+"" +
            "   water: " + this.water + " ml.</p>"
            + "<p class=\"bg-success\">"+"<img src=img/money.svg alt='money' width=\"60\" class=\"img-rounded\">"+"         price: " + this.turnover + " \$</p>"
        );
    };

    CoffeeMachine.prototype.htmlStatus = function () {
        // MAKE A PRETTY HTML OUTPUT HERE!!!!!
        var container = document.getElementById("statusContainer");

        container.style.backgroundColor = "#f1f1da";
        container.style.fontSize = "1.5em";
        container.style.color = "#8A6D3B";
        return this.status();
    };

    CoffeeNamespace.CoffeeMachine = CoffeeMachine;
    CoffeeNamespace.Beverage = Beverage;

})();








