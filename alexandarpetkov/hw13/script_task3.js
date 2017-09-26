"use strict";

var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];


//          TASK 3 - Homework #13
//
// function stillAlive(artist) {
//     var result;
//     var diedNaw = artist.died;
//
//     if ( diedNaw == undefined){
//         result = artist.name + ' is alive - true';
//     } else {
//         result = artist.name + ' is alive - false';
//     }
//
//     return result;
//     // returns true if the given artist is still alive and false otherwise
// }
//
// stillAlive(artists[0]); // => false
// stillAlive(artists[1]); // => true
//

function stillAlive(artist) {
    var result;
    var diedNaw = artist.died;

    if ( diedNaw == undefined){
        result = artist.name + ' is alive - true';
    } else {
        result = artist.name + ' is alive - false';
    }

    return result;
    // returns true if the given artist is still alive and false otherwise
}

stillAlive(artists[0]); // => false
stillAlive(artists[1]); // => true

var task3 = document.getElementById('Task_3');
var task31 = document.getElementById('Task_3.1');
//

task3.innerHTML = stillAlive(artists[0]);
task31.innerHTML = stillAlive(artists[1]);

// TASK 3 (method 2) - Homework #13

function stillAlive(artist) {
    var diedNaw = artist.died;
    var alive = false;

    if ( diedNaw == undefined){
        alive = true;
    }
    return alive;
}
console.log(stillAlive(artists[0]));
console.log(stillAlive(artists[1]));