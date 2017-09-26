"use strict";
var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
];
function allAlive(artists) {
    // returns a list of artists that are still alive
    var alivePersons=artists.filter(function (artist) {
        var notAllive=artist.died;
        if(notAllive===undefined){
            console.log(artist.name)
        }

    });
}
allAlive((artists));
