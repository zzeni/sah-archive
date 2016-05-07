/* 
Homework L12: Create functions, some higher order functions and some explanation of hofs in an object.
Last change: 5/6/2016/ 0:28h
*/
var myArray = [7, 8, 9, "Ivan"];
var myValue = 9;

function any(list, value) {
    /* 
    returns true if at least one value of the array is equal to the passed argument value
    */
    for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return true;
        }
    }
    return false;
}


function all(list, value) {
    /* 
    returns true if all the values of the array are equal to the passed argument value
    */
    for (var i = 0; i < list.length; i++) {
        if (list[i] !== value) {
            return false;
        }
    }

    return true;
}


// calling any and all
var anyResult = "any: " + any(myArray, myValue);
var allResult = "all: " +  all(myArray, myValue);

document.getElementById("1").innerHTML = anyResult;
document.getElementById("2").innerHTML = allResult;


// additional printing to the console. Just in case.
console.log(anyResult); 
console.log(allResult);



//////////////////// Higher order functions /////////////////////////


function callback(item) {
    /*
    small helper function that is used as a callback from the higher order functions hofAny and hofAll
    */
    if ((typeof item === "number") && (item < 100)) { // Numbers rule them all! Lol.
        return true;
    } else if (typeof item === "string") {
        return false;
    } else {
        return false;
    }
}



function hofAny(callback, array) {
    /*
    returns true if the condition in the callback function is true atleast once and false otherwise.
    */
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return true;
        }
    }
    return false;
}


function hofAll(callback, array) {
    /*
    returns true if the condition that is in the callback function is true every time and false otherwise
    */
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]) === false) {
            return false;
        }
    }
    return true;
}

// calling hofAny and hofAll
var hofAnyResult = "hofAny: " +  hofAny(callback, myArray);
var hofAllResult = "hofAll: " +  hofAll(callback, myArray);

document.getElementById("3").innerHTML = hofAnyResult;
document.getElementById("4").innerHTML = hofAllResult;

// additional printing the results to the console. Just in case.
console.log(hofAnyResult);
console.log(hofAllResult);



//////////////////// Explanation of what happens /////////////////////////

var array = [  // Sometimes this beautify.io extension SUX
    { 
        name: 'David Bowie',
        age: 69
    },
    
    {
        name: 'Thom Yorke',
        age: 47
    },
    
    {
        name: 'Matt Berninger',
        age: 45
    },
    
    {
        name: 'Tracy Chapman',
        age: 52
    },
    
    {
        name: 'Jim Morrison',
        age: 27
    },
    
    {
        name: 'Nick Cave',
        age: 58
    }
  ];



// Don't run it IF wrapper. We are not using a comment in order to see the 
// different colors.
if (9 !== 9) {



    var hofAny = (function (artist) {
        return artist.age < 50;
    }, array); // true

    var hofAll = (function (artist) {
        return artist.age < 50;
    }, array); // false




    var artists = {                                    // object with one property and two methods
        list: array,                                   // has a property "list" with value - the array from above
        any: function (callback) {                     // has a method "any" which is the self executing function "hofAny" from above
            return hofAny(callback, this.list);        // "any" accepts a parameter callback and returns the result given by hofAny, which is called on 
        },                                             // and the property list of the same instance.
        all: function (callback) {                     // same here
            return hofAll(callback, this.list);
        }
    };



    artists.any(function (artist) {                     // We are calling the method any of artists. It takes a function as a parameter, i.e. this is our callback. 
        return artist.age < 50;                         // We are running the callback by the higher order function for every item in the array.
    });                                                 // In the end "any" returns true or false if any of the items in the array are meeting the condition set in the
                                                        // callback parameter

    artists.all(function (artist) {                     // Almost same as above, but this time the condition in the callback that is checked against every item in the
        return artist.age < 50;                         // array should be true;
    });


} // end of if wrapper body