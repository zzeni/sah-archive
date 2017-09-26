"use strict"

var artists = [
    {
        name: 'Test Testing',
        born: 1947,
        died: 2016
    },
    {
        name: 'Hunter Thompson',
        born: 1968
    },
    {
        name: 'Iggy Pop',
        born: 1971
    },
    {
        name: 'Charlie Sheen',
        born: 1964
    },
    {
        name: 'JJ Beans',
        born: 1943,
        died: 1971
    },
    {
        name: 'Mike Patton',
        born: 1957
    }
  ];

// Start Task 2.1
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
     }

    console.log(findByAge(artists, 52));
  console.log(findByAge(artists, 34));
// End Task 2.1



// Start Task 2.2
function avarageAge(list) {
    var ourYear = new Date().getFullYear();
    var result;
    var total = 0;
    var age;

    for (var n = 0; n < list.length; n++) {
        var noDied;
        var born = list[n].born;
        var died = list[n].died;

        if (died === undefined) {
            noDied = ourYear;
            age = noDied - born;

            // console.log(ageNoDied);
            // console.log(typeof(ageNoDied)); //=>  FOUR number
        } else {
            age = died - born;
            // console.log(ageDied);
            //     console.log(typeof(ageDied));
        }
        total += age;                       // !!!!! JENI add TOTAL and change ageNoDied and ageDied to age !!!!!
    }
    result = Math.round((total)/list.length);
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
console.log(stillAlive(artists[0]));
console.log(stillAlive(artists[1]));
console.log(stillAlive(artists[2]));
console.log(stillAlive(artists[3]));
console.log(stillAlive(artists[4]));
console.log(stillAlive(artists[5]));

// End Task 2.3