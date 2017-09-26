/*global document*/
var myNamespace = {};
(function (namespace) {
    "use strict";

    function CoffeeMachine() {
        this.coffee = 0;
        this.milk = 0;
        this.water = 0;
        this.cups = 0;
        this.turnover = 0;
    }
    var machine = new CoffeeMachine();

    CoffeeMachine.prototype.smallLoad = function () {
        this.coffee += 100;
        this.milk += 200;
        this.water += 300;
        this.cups += 10;
    };
    CoffeeMachine.prototype.mediumLoad = function () {
        this.coffee += 500;
        this.milk += 300;
        this.water += 1000;
        this.cups += 30;
    };
    CoffeeMachine.prototype.bigLoad = function () {
        this.coffee += 1000;
        this.milk += 500;
        this.water += 2000;
        this.cups += 60;
    };
    CoffeeMachine.prototype.htmlStatus = function () {
        return ("<div class=\"well\">coffee: " + this.coffee + " gr</div>" + "<div class=\"well\">milk: " + this.milk + " ml</div>" + "<div class=\"well\">water: " + this.water + " ml</div>" + "<div class=\"well\">cups: " + this.cups + " pcs</div>" + "<div class=\"well\">Turnover: " + this.turnover.toFixed(2) + " BGN</div>");
    };
    
    CoffeeMachine.prototype.order = function (beverage) {
        var recepes = beverage.getRecipe(),
            price = beverage.getPrice();

        if ((this.coffee >= recepes.coffee) && (this.milk >= (recepes.milk || 0)) && (this.water >= recepes.water) && (this.cups >= recepes.cups)) {
            this.coffee -= recepes.coffee;
            this.milk -= recepes.milk || 0;
            this.water -= recepes.water;
            this.cups -= recepes.cups;
            this.turnover += price;
        } else {
            throw new Error("<div class=\"well\">Not enough components</div>");
        }

    };

    function Beverage(name) {
        var PRICES = {
            coffee: {
                recipe: {
                    coffee: 20,
                    water: 60,
                    cups: 1
                },
                price: 0.5
            },
            coffee_with_milk: {
                recipe: {
                    coffee: 20,
                    water: 50,
                    milk: 20,
                    cups: 1
                },
                price: 0.6
            },
            cappuccino: {
                recipe: {
                    coffee: 20,
                    water: 30,
                    milk: 40,
                    cups: 1
                },
                price: 0.8
            },
            latte: {
                recipe: {
                    coffee: 20,
                    water: 30,
                    milk: 60,
                    cups: 1
                },
                price: 0.8
            },
            americano: {
                recipe: {
                    coffee: 20,
                    water: 130,
                    cups: 1
                },
                price: 0.6
            },
            double: {
                recipe: {
                    coffee: 35,
                    water: 80,
                    cups: 1
                },
                price: 0.7
            }
        };
        var _name = name,
            _price = PRICES[name].price,
            _recipe = PRICES[name].recipe;

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
    document.getElementById("statusContainer").innerHTML = machine.htmlStatus();
    namespace.CoffeeMachine = CoffeeMachine;
    namespace.Beverage = Beverage;
})(myNamespace);
