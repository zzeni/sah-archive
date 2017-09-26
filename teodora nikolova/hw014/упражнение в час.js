//задачата за колелата
"use strict";

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

console.log("Need a bike?..");

function logBikes(bikesList) {
    //1-ви начин
    // var bike=bikes[0];
    // for( var i=0; i<bikes.length;i++){
    //     let bikesAll=bikesList[i];
    //     console.log("\t"+bikesAll.name+": "+bike.price+"$");
    //
    // }

    //2-ри начин
    // for (var i = 0; i < bikes.length;i++)
    // {
    //    var allBikes=bikes[i];
    //     console.log("\t"+allBikes.name+": "+allBikes.price+"$")
    //
    // }
    //3-ти начин
    bikesList.forEach(function (bikesItems) {
        console.log(bikesItems.name+": "+bikesItems.price+"$");

    })

}

logBikes(bikes); // => Drag: 200$
                 //    RAM: 500$
                 //    Scott: 1200$
