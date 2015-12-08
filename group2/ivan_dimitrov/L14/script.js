"use strict";

function greeting(name) {
    return "Hello, " + name + "!";
}


function Person(fname, lname, isPolite) {
    this.firstName = fname;
    this.lastName = lname;
    this.isPolite = true;
    this.bePolite = function (isPolite) {
        this.isPolite = isPolite;
    }
    this.introduce = function (otherPerson) {
        if (this.isPolite) {
            return this.greet(otherPerson) + " My name is " + this.firstName + " " + this.lastName + ".";
        } else {
            return this.greet(otherPerson) + " I am " + this.firstName + ".";
        }
    }

    this.greet = function (otherPerson) {
        if (otherPerson === undefined) {
            if (this.isPolite === false) {
                return "Hi!";
            } else {
                return "Hello!";
            }
        } else {
            if (this.isPolite === false) {
                return "Hi, " + otherPerson.firstName + "!";
            } else {
                return "Hello, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
            }
        }
    }
}

/*4*/
function personGreeting(person, beFormal) {
    var fullName = person.firstName + " " + person.lastName;
    if (beFormal == true) {
        return "Hello, " + fullName + "!";
    } else {
        return "Hi, " + person.firstName + "!";
    }
}