var artists = [
    {
        name: 'David Bowie',
        born: 1947,
        died: 2016
    },
    {
        name: 'Thom Yorke',
        born: 1968
    },
    {
        name: 'Matt Berninger',
        born: 1971
    },
    {
        name: 'Tracy Chapman',
        born: 1964
    },
    {
        name: 'Jim Morrison',
        born: 1943,
        died: 1971
    },
    {
        name: 'Nick Cave',
        born: 1957
    }
  ];


function findByAge(list, age) {
    // returns the name of the artist that has the given age
    var thisYear = (new Date()).getFullYear(); // текуща година, така я получаваме 
    // var foundMatch = false;
    for (var i = 0; i < list.length; i++) {
        if (thisYear - list[i].born === age) {
            // foundMatch = true;
            return list[i].name;
        }
    }

    // if (foundMatch === false) {
    return -1;
    // }
}

// findByAge(artists, 52);
// findByAge(artists, 45);
// findByAge(artists, 30);


function avarageAge(list, age) {
    // returns the average age of all artists
    var sumAges = 0;
    var year = (new Date()).getFullYear();
    var alivePeopleCount = 0;
    for (let i = 0; i < list.length; i++) {
        var currentArtist = list[i];
        var currentArtistAge;

        if (stillAlive(currentArtist)) {
            currentArtistAge = year - currentArtist.born;
            alivePeopleCount++;
            sumAges = sumAges + currentArtistAge;
        }
    }

    return sumAges / alivePeopleCount;
}

// avarageAge(artists); // => 50


function stillAlive(artist) {
    // returns true if the given artist is still alive and false otherwise
    if (artist.died) {
        return false;
    } else {
        return true;
    }
}

// stillAlive(artists[0]); // => false
// stillAlive(artists[1]); // => true


function allAlive(artists) {
    // returns a list of artists that are still alive
    var aliveArtists = [];
    for (var i = 0; i < artists.length; i++) {
        if (stillAlive(artists[i])) {
            aliveArtists.push(artists[i]);
        }
    }
    return aliveArtists;
}

// allAlive(artists); // списък с 4 елемента