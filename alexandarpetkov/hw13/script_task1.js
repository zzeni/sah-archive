"use strict"

var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },                         //string.indexOf()
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];


function findByAge(list, age) {
    var ourYear = new Date().getFullYear();         // with this variable get this YEAR
    var result;                                     // result variable is declared

    for (var i = 0; i < list.length; i++) {         // for loop whole array - all 6 persons
        var artistAge = ourYear - list[i].born;     /* take the artist age with number we give it when call
                                                    the function /the 'i' is to loop all index of array/ */
        if (artistAge === age) {                    // compare age of call function with all indexes of array
            result = list[i].name;                  // write down the name of this aged artist;
        break;

        } else {
            result = -1;
        }
    }
    return result;
      // returns the name of the artist that has the given age
}

  // findByAge(artists, 52); // => "Tracy Chapman"
  // findByAge(artists, 34); // => -1

  console.log(findByAge(artists, 52));
  console.log(findByAge(artists, 34));

  var task1 = document.getElementById('Task_1');
  var task1a =  document.getElementById('Task_1.1');

  task1.innerHTML = findByAge(artists, 52);
  task1a.innerHTML = findByAge(artists, 34);

    // MY CODE before VASSKO`S help

// function findByAge(list, age) {
  // for (var i = 0; i < artists.length; i++) {
  //   var results;
  //   var ourYear = new Date();
  //   var years = ourYear.getFullYear() - list[i].born;

  //   console.log(years);
  //
  //   if (years == age) {
  //       results = list[i].name;
  //   } else {
  //       results = 'no such person';
  //   }
  // }
  //   return results;
// }

