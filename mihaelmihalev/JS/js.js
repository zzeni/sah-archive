var machine =  new CoffeeMaker();

function CoffeeMaker(coffee, water, milk, cup){
    this.coffee = 0;
    this.water =  0;
    this.milk = 0;
    this.cup = 0;
    
}

CoffeeMaker.prototype.status = function () {
    console.log("Coffee: ", this.coffee);
    console.log("Water: ", this.water);
    console.log("Milk: ", this.milk);
    console.log("Cup: ", this.cup);
}

CoffeeMaker.prototype.smallLoad = function () {
    this.coffee = 500;
    this.water =  1000;
    this.milk = 200;
    this.cup = 20;
}

CoffeeMaker.prototype.mediumLoad = function () {
    this.coffee = 1000;
    this.water =  1500;
    this.milk = 300;
    this.cup = 40;
}

CoffeeMaker.prototype.bigLoad = function () {
    this.coffee = 1500;
    this.water =  2000;
    this.milk = 500;
    this.cup = 60;
}

machine.mediumLoad();

machine.status();
