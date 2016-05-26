// L15

////////////////////////////////////////// TASK 1 ////////////////////////////////////////

(function(){
	
	function calcAge(day, month, year) {
    /*
	This function takes day, month and year and returns the the age. If a future date is given, it returns a error message
    */

    var age = 0;
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear();


    // guardian statement (check if the given year is in the future)

    if (year > currentYear) { // 2017 is definitely in the future
        return "This is in the future!";
    } else if (year === currentYear) {

        if (month > currentMonth) {
            return "This is in the future!"; // Same year, but future month given
        } else if (month === currentMonth) {

            if (day > currentDay) {
                return "This is in the future!"; // Same year, same month, but future day given
            }
        }
    }



    // calculate the age
    age = (currentYear - year) - 1; // 2016 - 1988 = 28, but we need to check if the birth day has already passed, so we are setting it to 28 - 1

    if (month - currentMonth < 0) { // if the month of the bd has passed
        age += 1;
    } else if (month - currentMonth === 0) {
        if (day - currentDay < 0 || day - currentDay === 0) { // if the day has passed or it is their birthday
            age += 1;
        }
    }

    return age;
}


console.log("TASK 1");

console.log("Given date: 12,3,1988: " + calcAge(12, 3, 1988)); // 28
console.log("Given date: 10,8,1988: " + calcAge(10, 8, 1988)); // 27
console.log("Given date: 10,8,2016: " + calcAge(10, 8, 2016)); // This is in the future!

//Control: This test uses the next day after the current date (If today is 16.5, it will give us 17.5)
console.log("Given date: " + (new Date().getDate() + 1) + ",8,2016: " + calcAge((new Date().getDate() + 1), 5, 2018));






////////////////////////////////////////// TASK 2 ////////////////////////////////////////
function calcAge2(str) {
    /*
    	This function splits the string argument by the '-' character and passes the new arguments to calcAge to calculate the age.
    	NOTE: This function has no guardian statements and checks
    */

    var splitted = str.split("-");
    var givenDay = +splitted[0]; // by putting a plus sign in front of splitted[0] we are converting it to a int (a shortcut)
    var givenMonth = +splitted[1]; // this also saves us the check if there is a zero in front of the digit we need, i.e. the number is less than 10
    var givenYear = +splitted[2];

    var ageOrError = calcAge(givenDay, givenMonth, givenYear);

    return ageOrError;
}



console.log("\nTASK 2");

console.log("Given date: 12-3-1988: " + calcAge2("12-03-1988")); // 28
console.log("Given date: 10-8-1988: " + calcAge2("10-08-1988")); // 27
console.log("Given date: 10-11-2016: " + calcAge2("10-11-2016")); // This is in the future!



////////////////////////////////////////// TASK 3 ////////////////////////////////////////
// Create a class Person with firstName,lastName and birthdate



function Person(firstName, lastName, birthdate) {
    var _name = firstName;
    var _last = lastName;
    var _birthdate = birthdate;


    return {
        firstName: function () {
            return _name;
        }
        , lastName: function () {
            return _last;
        }
        , tellMyAge: function () {
            return calcAge2(_birthdate);
        }
    };

}

var ani = new Person('Ani', 'Ivanova', '10-08-1988');

console.log("\nTASK 3");
console.log(ani.firstName() + "'s age: " + ani.tellMyAge()); // 27


////////////////////////////////////////// TASK 4 ////////////////////////////////////////
// Change the location

$("#task4start").click(function () {
    window.setTimeout(function () {
        var loc = window.location;
        loc.assign("https://www.google.bg/");
    }, 3000);
});


////////////////////////////////////////// TASK 5 ////////////////////////////////////////
// Generate a pagraph every two seconds with text: "Do you know how to stop me?"

var onOff = false;
var addInterval;

function addParagraph() {
    $("#task5wrapper").append("<p>Do you know how to stop me?</p>");
}

function stopInterval(given_interval) {
    window.clearInterval(given_interval);
}


$("#task5start").click(function () {
    onOff = !onOff;


    if (onOff === true) {

        addInterval = window.setInterval(addParagraph, 2000);
        $("#task5start").css("color", "red");

    } else {
        stopInterval(addInterval);
        $("#task5start").css("color", "black");

    }

});


$("#task5clear").click(function () {
    $("#task5wrapper").html("");
});
	
	
}()); // master wrapper for this file - end.

