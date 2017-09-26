"use strict";

var bikes = [];

function Bike (name, price) {
    this.name = name;
    this.price = price;
    this.imageSrc = "";
}

Bike.prototype.toHTML = function () {
    var html = "<div><h3>" + this.name + "</h3>" +
                    "<p>price: " + this.price + 
                "$</p><img src='" + this.imageSrc + "'></div>";
    return html;
};

function addBikes() {
    bikes.push(new Bike("Wilier Jaroonplus", 2850));
    bikes.push(new Bike("Raleigh Stuntman", 2500));
    bikes.push(new Bike("Canyon Endurace-9.0", 4500));
    bikes.push(new Bike("Renovo John Day", 4250));
    bikes.push(new Bike("KHS Grit 220", 1349));
    bikes.push(new Bike("Salsa Cutthroat 1", 3000));
    bikes.push(new Bike("Scott Addic cx10", 6500));
    bikes.push(new Bike("Specialized Sequoia", 1350));
    bikes.push(new Bike("Grade Carbon Ultegra", 3800));
    bikes.push(new Bike("KONA Private Jake", 1999));
}

function addBikesImages() {
    bikes.map(function(bike) {
        bike.imageSrc = bike.name + ".jpg";
    })
}

function previewBikes() {
    bikes.forEach(function(bike) {
        document.write(bike.toHTML());
    })
}

addBikes();
addBikesImages();
previewBikes();