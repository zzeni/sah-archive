"use strict";

function greeting(name) {

    return "Hi, " + name + "!";
}

function personGreeting(person, beFormal) {
    if (beFormal === true) {
        return "Hello, " + person.firstName + " " + person.lastName;
    } else if (beFormal === false) {
        return "Hello, " + person.firstName;
    }
}

class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isPolite = true;
        this.greet = function (otherPerson) {
            if (otherPerson != undefined) {
                return "Hi, " + otherPerson.firstName + "!";
            } else {
                return "Hi!";
            }
        }

        this.bePolite = function (parameter) {
            if (parameter == false) {
                this.isPolite = false;
            } else if (parameter == true) {
                this.isPolite = true;
            }
        }
        this.introduce = function (otherPerson) {
            if (this.isPolite == true) {
                return "Hello, my name is " + this.firstName + " " + this.lastName + "!";
            } else if (this.isPolite == false || otherPerson != undefined) {
                return "Hi, " + otherPerson.firstName + ", i`m " + this.firstName + "!";
            } else if (this.isPolite == false) {
                return "Hi, i`m " + this.firstName + "!";
            }
        }
    }
}