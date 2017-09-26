"use strict";

function Bike(name, price) {
    this.name = name;
    this.price = price;
}

Bike.prototype.toHTML = function () {
    var html = "<h3>Name: " + this.name + "</h3>";
    html += "<p>Price: " + this.price + "$</p><hr>";
    return html;
}

var bikes = [
       new Bike("Drag", 200),
       new Bike("RAM", 500),
       new Bike("Scott", 1300),
       new Bike("Riviera", 1500)
    ]


bikes.forEach(function (bike) {
    document.write(bike.toHTML());
})


previewBikes();
