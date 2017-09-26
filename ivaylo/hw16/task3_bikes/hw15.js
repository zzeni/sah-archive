
"use strict";



function Bike (name, price) {
    this.name = name;
    this.value = price;
}
var bike = new Bike("Scott", 560);


Bike.prototype.toHTML = function () {
    var html = "<h3>" + this.name + "</h3>";
    html += "<p>price: " + this.value + "$</p>";
    return html;
};
var bike = new Bike("Scott", 560);
var bike1 = new Bike("Drag", 200);
var bike2 = new Bike("RAM", 500);
var bike3 = new Bike("Riviera", 280);

document.write(bike.toHTML());
document.write(bike1.toHTML());
document.write(bike2.toHTML());
document.write(bike3.toHTML());


