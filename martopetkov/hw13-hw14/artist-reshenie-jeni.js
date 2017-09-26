(function() {
  "use strict";

  var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];

  var currentYear = (new Date()).getFullYear();

  artists.forEach(function(artist) {
    artist.age = (artist.died||currentYear) - artist.born;
  });

  function findByAge(list, age) {
    // returns the name of the artist that has the given age
    var result;
    var found;

//    for(let i=0;i<list.length;i++) {
//      if(artist.age === age) {
//        found = list[i];
//      }
//    }

    found = artists.find(function(artist) {
      return artist.age === age;
    });

    return found ? found.name : -1;

//    if (found) {
//      result = found.name;
//    }
//    else {
//      result = -1;
//    }
//
//    return result;
  }

  console.log("findByAge(artists, 52):", findByAge(artists, 52)); // => "Tracy Chapman"
  console.log("findByAge(artists, 34):", findByAge(artists, 34)); // => -1


  function avarageAge(list, age) {
    // returns the average age of all artists
    var total = 0;
    for(var i=0;i<list.length;i++) {
      total += list[i].age;
    }

    return Math.round(total/list.length);
  }

  console.log(artists);

  console.log("avarageAge(artists):", avarageAge(artists)); // => 50
})();