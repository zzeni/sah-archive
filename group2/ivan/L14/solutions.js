'use strict'

function greeting(name) {
    return "Hello, " + name + "!";
}

function Person(fname, lname, isPolite) {
    this.firstName = fname;
    this.lastName = lname;
    this.isPolite = true;
    this.greet = function (otherPerson) {
        var result = "";
        if (otherPerson != undefined) {
            if (this.isPolite) {
                result += "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
            } else {
                result += "Здрасти, " + otherPerson.firstName + "!";
            }
        } else {
            if (this.isPolite) {
                result += "Здравейте! ";
            } else {
                result += "Здрасти! ";
            }
        }
        return result;
    }
    this.introduce = function (otherPerson) {
        result = this.greet(otherPerson);
        if (this.isPolite === true) {
            result += " Казвам се " + this.firstName + " " + this.lastName + ".";
        } else {
            result += " Аз съм " + this.firstName + ".";
        }
        return result
    }
    this.bePolite = function (polite) {
        if (polite === false) {
            this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    }
}

function personGreeting(Person, beFormal) {
    result = "";
    if (beFormal === true) {
        result += "Hello, " + Person.firstName + " " + Person.lastName + "!";
    } else {
        result += "Hi, " + Person.firstName + "!";
    }
    return result;
}