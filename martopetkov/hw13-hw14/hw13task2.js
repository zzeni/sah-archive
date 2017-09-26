"use strict"

//var artists = [
//    {
//        name: 'Test Testing',
//        born: 1947,
//        died: 2016
//    },
//    {
//        name: 'Hunter Thompson',
//        born: 1968
//    },
//    {
//        name: 'Iggy Pop',
//        born: 1971
//    },
//    {
//        name: 'Charlie Sheen',
//        born: 1964
//    },
//    {
//        name: 'JJ Beans',
//        born: 1943,
//        died: 1971
//    },
//    {
//        name: 'Mike Patton',
//        born: 1957
//    }
//  ];




 var artists = [
    { name: 'David Bowie', born: 1947, died: 2016 },
    { name: 'Thom Yorke', born: 1968 },
    { name: 'Matt Berninger', born: 1971 },
    { name: 'Tracy Chapman', born: 1964 },
    { name: 'Jim Morrison', born: 1943, died: 1971 },
    { name: 'Nick Cave', born: 1957 }
  ];


// Start Task 2.1
function findByAge(list, age) {
    var result;
    var currentYear = (new Date()).getFullYear();

//    result = artists.find(function(artist) {
//return currentYear - item.born === age;
//                          return artistAge === age;
//                          });
//    return result ? result.name : -1;
//}
    
    for (let i=0; i < list.length; i++) {
        var artistAge = currentYear - list[i].born;

        if (artistAge === age) {
            result = list[i].name;
            break;

        } else {
            result = -1;
        }
    }
    
    console.log("artistAge: ", artistAge);
    return result;

}

console.log(findByAge(artists, 52));
console.log(findByAge(artists, 34));
//console.log(i);

// End Task 2.1



// Start Task 2.2
function avarageAge(list) {
    var currentYear = new Date().getFullYear();
    var result;
    var total = 0;
    var age;

    for (var n = 0; n < list.length; n++) {
        var noDied;
        var born = list[n].born;
        var died = list[n].died;

        if (died === undefined) {
            noDied = currentYear;
            age = noDied - born;

            // console.log(ageNoDied);
            // console.log(typeof(ageNoDied)); //=>  FOUR number
        } else {
            age = died - born;
            // console.log(ageDied);
            //     console.log(typeof(ageDied));
        }
        total += age; // !!!!! JENI add TOTAL and change ageNoDied and ageDied to age !!!!!
    }
    result = Math.round((total) / list.length);
    // console.log(result);
    return result;
    // returns the average age of all artists
}
console.log(avarageAge(artists)); // => 50

// End Task 2.2




// Start Task 2.3

function stillAlive(artist) {
    var passedaway = artist.died;
    var alive = false;
    if (passedaway === undefined) {
        alive = true;
    }
    return alive;
}
//console.log(stillAlive(artists[0]));
//console.log(stillAlive(artists[1]));
//console.log(stillAlive(artists[2]));
//console.log(stillAlive(artists[3]));
//console.log(stillAlive(artists[4]));
//console.log(stillAlive(artists[5]));

// End Task 2.3