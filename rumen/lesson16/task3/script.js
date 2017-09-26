function Bike(name, price) {
    this.name = name;
    this.value = price;
}
Bike.prototype.toHTML = function (name, value) {
    var div = document.createElement("div"),
        header3 = document.createElement("h3"),
        para = document.createElement("p"),
        img = document.createElement("img");
    header3.innerHTML = "Brand: " + this.name;
    para.innerHTML = "Price: " + this.value;
    var lowCase = this.name.toLocaleLowerCase();
    img.setAttribute("src", "img/" + lowCase + ".jpg");
    div.appendChild(header3);
    div.appendChild(img);
    div.appendChild(para);
    document.body.appendChild(div);
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
        price: 1200
    }
];

function convertToObj(bike) {
    return new Bike(bike.name, bike.price);
}
var bikeObjects = bikes.map(convertToObj);
for (var bike of bikeObjects) {
    bike.toHTML();
}
