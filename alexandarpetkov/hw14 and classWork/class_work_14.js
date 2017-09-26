
var student = {naem: 'Ivan Petrov', grade: 'second', classLetter: 'A', number: '12'};
//console.log(student);

var robot = {cordinateX: '', cordinateY: '', moves: '1', orientation: 'north' };
//console.log(robot);



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

        // My results home:

function logBikes(bikesList) {
    var allBikes = '';

    for (var i=0; i < bikes.length; i++) {
        var bike = (bikesList[i].name + ':' + ' ' + bikesList[i].price + " $");
        // console.log(bike);
        allBikes += ("\n" + bike);
    }
    return allBikes;
}
console.log(logBikes(bikes)); // => Drag: 200$
                              //    RAM: 500$
                              //    Scott: 1200$


var classWorkTask_1 = document.getElementById('task_1');
classWorkTask_1.innerHTML = 'student is : ' + student;

var classWorkTask_2 = document.getElementById('task_2');
classWorkTask_2.innerHTML = 'robot is : ' + robot;

var classWorkTask_3 = document.getElementById('task_3');
classWorkTask_3.innerHTML = logBikes(bikes);


            // In Class (Other + My) :

//function logBikes(bikesList) {

//    for (var i=0; i < bikes.length; i++) {
//        // var bike = bikesList[i];
//        // console.log(bike.name + ' : ' + bike.price + ' $ ');

//        var bike = (bikesList[i].name + ':' + ' ' + bikesList[i].price + " $");
//        console.log(bike);

//    }
//}
//console.log(logBikes(bikes));