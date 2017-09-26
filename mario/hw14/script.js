'use strict';

var list = [2, 5, 1, 45, 4];

document.getElementById("before").innerHTML = list;

var listLenght = list.length;

for (let i = 0; i < listLenght; i++) {
    for (let j = 0; j < i; j++) {
        if (list[i] < list[j]) {
            var tmp = list[i];
            list[i] = list[j];
            list[j] = tmp;
        }
    }
}

document.getElementById("after").innerHTML = "After: " + list;

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
  },
    {
        name: "test",
        price: 10
  }
];

function logBikes(bikesList) {
    var bikesCount = bikesList.length;
    for (var i = 0; i < bikesCount; i++) {
        var bike = bikes[i];
        console.log(bike.name + ": " + bike.price + "$");
    }
};

document.getElementById("bikes").innerHTML = logBikes(bikes);

var str1 = "the quick brown fox jumped over the lazy dog";


var list = str1.split(" ");

document.getElementById("notsorted").innerHTML = "Not sorted: " + list;

var sortedByWordLength = list.sort(function (elem1, elem2) {
    return elem1.length > elem2.length;
});

document.getElementById("sortbylength").innerHTML = "sorted By Word Length: " + sortedByWordLength;

var sortedByAlphabeticOrder = list.sort(function (elem1, elem2) {
    return elem1 > elem2;
});

document.getElementById("sortedbyname").innerHTML = "sorted By Alphabetic Order: " + sortedByAlphabeticOrder;

var filteredList = list.filter(function (item) {
    // console.log("item", item , item.indexOf("o"));
    return item.indexOf("o") >= 10;
});

var filteredList2 = list.filter(function (item2) {
    //console.log(item2.length > 3);
    return item2.length > 3;
});

document.getElementById("lessthan3char").innerHTML = "More than 3 symbols: " + filteredList2;