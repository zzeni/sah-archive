    "use strict";
    var artists = [
    {name: 'David Bowie', born: 1947, died: 2016},
    {name: 'Thom Yorke', born: 1968},
    {name: 'Matt Berninger', born: 1971},
    {name: 'Tracy Chapman', born: 1964},
    {name: 'Jim Morrison', born: 1943, died: 1971},
    {name: 'Nick Cave', born: 1957}
];

var currentYear = new Date().getFullYear();
artists.forEach(function (artist) {
    artist.age = (artist.died || currentYear) - artist.born;
});

function avarageAge(list, age) {
    "use strict";

    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i].age;
    }
    return Math.round(total / list.length);


}

console.log(avarageAge(artists));
