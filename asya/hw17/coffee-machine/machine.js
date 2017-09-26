/*global document*/
"use strict";

function CoffeeMachine() {
    this.coffee = 0;
    this.milk = 0;
    this.water = 0;
    this.cups = 0;
}
var namespace = (function () {
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
    return ("<div class=\"well\">Coffee content left: " + this.coffee + " gr</div>" + 
            "<div class=\"well\">Milk content left: " + this.milk + " ml</div>" + 
            "<div class=\"well\">Water content left: " + this.water + " ml</div>" + 
            "<div class=\"well\">Cups content left: " + this.cups + " pcs</div>");
};
CoffeeMachine.prototype.order = function (beverage) {
    if (recipes[beverage] === undefined) {
        throw new Error("<div class=\"well\">Uknown beverage</div>");
    }
    else if ((this.coffee >= recipes[beverage].coffee) && (this.milk >= (recipes[beverage].milk || 0)) && (this.water >=                   recipes[beverage].water) && (this.cups >= recipes[beverage].cups)) {
        this.coffee -= recipes[beverage].coffee;
        this.milk -= recipes[beverage].milk || 0;
        this.water -= recipes[beverage].water;
        this.cups -= recipes[beverage].cups;
        
        return this;
    }
    else {
        throw new Error("<div class=\"well\">Not enough components</div>");
    }
};

function RECIPES() {
    this.coffee = {
    coffee: 20,
    water: 60,
    cups: 1
};
this.coffee_with_milk = {
    coffee: 20,
    water: 50,
    milk: 20,
    cups: 1
};
this.cappuccino = {
    coffee: 20,
    water: 30,
    milk: 40,
    cups: 1
};
this.latte = {
    coffee: 20,
    water: 30,
    milk: 60,
    cups: 1
};
this.americano = {
    coffee: 20,
    water: 130,
    cups: 1
};
this.double = {
    coffee: 35,
    water: 80,
    cups: 1
};
}
    
var recipes = new RECIPES();
document.getElementById("statusContainer").innerHTML = machine.htmlStatus();
});
namespace();