function CoffeeMachine() {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0;
}
var machine = new CoffeeMachine();

CoffeeMachine.prototype.htmlStatus = function () {
    return "<h3>coffee: " + this.coffee + " gr</h3><hr>" + "<h3>milk: " + this.milk + " ml</h3><hr>" + "<h3>water: " + this.water + " ml</h3><hr>" + "<h3>cups: " + this.cups + " pcs</h3>";

}

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

var PRICES = {
    "coffee": {
        recipe: {
            coffee: 20,
            water: 60,
            milk: 0,
            cups: 1,
        },
        price: 0.5
    },
    "coffeeWithMilk": {
        recipe: {
            coffee: 20,
            water: 50,
            milk: 20,
            cups: 1,
        },
        price: 0.6
    },
    "cappuccino": {
        recipe: {
            coffee: 20,
            water: 30,
            milk: 40,
            cups: 1,
        },
        price: 0.8
    },
    "latte": {
        recipe: {
            coffee: 20,
            water: 30,
            milk: 60,
            cups: 1,
        },
        price: 0.8

    },
    "americano": {
        recipe: {
            coffee: 20,
            water: 130,
            milk: 0,
            cups: 1,
        },
        price: 0.6
    },
    "doubleCoffee": {
        recipe: {
            coffee: 35,
            water: 80,
            milk: 0,
            cups: 1,
        },
        price: 0.7
    }
};


function Beverage(name) {
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



CoffeeMachine.prototype.order = function (beverage) {
    var recipe = PRICES[beverage];
    this.coffee -= recipe.coffee || 0;
    this.water -= recipe.water || 0;
    this.milk -= recipe.milk || 0;
    this.cups -= recipe.cups || 0;
}


document.getElementById("statusContainer").innerHTML = machine.htmlstatus();
