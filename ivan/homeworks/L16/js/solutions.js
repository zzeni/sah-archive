//L16 Homework - 5/20/2016


// TASK 1
// Write a function greeting, which accepts a parameter name and returns
// a string that greets, Example: greeting("Jeni"); // "Hello, Jeni!"

function greeting(name) {
    'use strict';

    var theGreeting = "Hello, " + name + "!";
    return theGreeting;
}

//TASKS 2,5,6,7,8,9,10
/* (2) Write a class Person, which accepts personal and family name for the constructed
   objects;
   (5) Write a method introduce of the class Person, that returns a string that
   introduces the current instance of Person;
   (6) Add another property to the Person class named isPolite with default value of true;
   (7) Add a method to Person that can change the isPolite property by a given parameter;
   (8) Change the method introduce, so that if isPolite is true, to return a polite Greeting
   and notFormalGreeting when isPolite is false;
   (9) Write a method greet to the class Person that accepts as a parameter another
   Person object and greets the other Person instance;
   (10) Change the method introduce, so that it can acept a parameter of type Person(introduce(otherPerson))
   Combine greet and introduce by using the result of greet(otherPerson) in introduce
   Change greet so that it checks if the parameter otherPerson has been passed
    ( if (otherPerson !== undefined) {..} ); If yes, do a greeting by name (polite or notPolite)
	If not parameter is passed (otherPerson), then just return a greeting;
*/


function Person(firstName, lastName) {
    'use strict';

    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;

    return this;
}

Person.prototype.introduce = function (otherPerson) {
    'use strict';

    var myNameIs = "Казвам се ";
    var iAm = "Аз съм ";
    var introduceAndGreet = "";
    var greetings = this.greet(otherPerson) ? this.greet(otherPerson) + " " : "";


    if (this.isPolite) {
        introduceAndGreet = greetings + myNameIs + this.firstName + " " + this.lastName + ".";
    } else {
        introduceAndGreet = greetings + iAm + this.firstName + ".";
    }
    return introduceAndGreet;
};

Person.prototype.bePolite = function (thatIsTheQuestion) {
    'use strict';

    var toBeOrNotToBe = thatIsTheQuestion; // :D

    if (typeof toBeOrNotToBe === "boolean") {
        this.isPolite = toBeOrNotToBe;
    }
};

Person.prototype.greet = function (otherPerson) {
    'use strict';

    var hello = "Здравейте";
    var hi = "Здрасти";
    var greetOtherPerson = "";

    if (this.isPolite) {
        if (otherPerson !== undefined) {
            greetOtherPerson = hello + ", " + otherPerson.firstName + " " + otherPerson.lastName + "!";
        } else {
            greetOtherPerson = hello + "!";
        }
    } else {
        if (otherPerson !== undefined) {
            greetOtherPerson = hi + ", " + otherPerson.firstName + "!";
        } else {
            greetOtherPerson = hi + "!";
        }
    }
    return greetOtherPerson;
};


//TASKS 3, 4
// (3) Write a second function that greets, call it personGreeting and pass a Person objects
// as a parameter
// (4) Change the function to take an addition parameter beFormal with values true or false,
// if beFormal is true, be formal then, else - don't

function personGreeting(personObj, beFormal) {
    'use strict';

    var notFormalGreeting = "";
    var formalGreeting = "";

    if (beFormal) {
        formalGreeting = "Hello, " + personObj.firstName + " " + personObj.lastName + "!";
        return formalGreeting;
    } else {
        notFormalGreeting = "Hi, " + personObj.firstName + "!";
        return notFormalGreeting;
    }
}