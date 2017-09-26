"use strict";
var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
];

function stillAlive(artist) {
    var notAlive=artist.died;
    var result=0;
    if(notAlive===undefined){
        result= true;
    }
    else{
        result=false;
    }
    return result;
}


console.log(stillAlive(artists[0])); // => false
console.log(stillAlive(artists[1])); // => true