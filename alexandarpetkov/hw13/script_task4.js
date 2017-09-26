"use strict"

var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },                         //string.indexOf()
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];



            // Task 4

function allAlive(artists) {

    var searchPerson = artists.filter(function stillAlive(artist) {

        var diedNaw = artist.died;

        if ( diedNaw == undefined){
            console.log(artist.name);
        }
    });
    return artists.filter(stillAlive);

};

    var htmlIn = document.getElementById('Task_4');
    htmlIn.innerHTML = artists.filter(stillAlive(artist));

allAlive(artists);


