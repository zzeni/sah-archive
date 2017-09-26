    "use strict";
        var artists = [
     { name: 'David Bowie', born: 1947, died: 2016 },
     { name: 'Thom Yorke', born: 1968 },
     { name: 'Matt Berninger', born: 1971 },
     { name: 'Tracy Chapman', born: 1964 },
     { name: 'Jim Morrison', born: 1943, died: 1971 },
     { name: 'Nick Cave', born: 1957 }
 ];



 function findByAge(list, age) {
 // returns the name of the artist that has the given age
     var result=0;
     var currentYear=new Date().getFullYear();
     result=artists.find(function (artists) {
         var artistAge=currentYear-artists.born;
          return artistAge===age;
      });
     return result? result.name : -1;
 }
 console.log(findByAge(artists,52));
 console.log(findByAge(artists,32));
