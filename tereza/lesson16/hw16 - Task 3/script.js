function Bike(name, price) {
  this.name = name;
  this.price = price;
} 
Bike.prototype.toHTML = function () {
  var html = "<h4>" + this.name + "</h4>";
  html += "<p>Price: " + this.price + "$</p>";
  return html;
};

var bikes = [
  {
    name: "Drag",
    price: 200
  },
  {
    name: "RAM",
    price: 500
  },
  {
    name: "Scott",
    price: 900
  },
  {
    name: "Drag300",
    price: 1200
  },
  {
    name: "RAM4000",
    price: 500
  },
  {
    name: "RAM200",
    price: 700
  },
  {
    name: "Cross",
    price: 850
  }
];

function convertToObject(bike) {
  return new Bike(bike.name, bike.price);
}
var newList = bikes.map(convertToObject);
document.write(newList.map(function (bike) {
  return bike.toHTML();
}));
