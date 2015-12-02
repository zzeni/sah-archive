'use strict';
function greeting(name) {
    return "Hallo, " + name;

}

function Person(fName, lName, isPolite) {
    this.firstName = fName;
    this.lastName = lName;
    this.isPolite = true;
    this.introduce = function (p) {
        Person = p;
        if (p === undefined) {
            if (this.isPolite === true) {
                return "Здравейте, казвам се " + fName + " " + lName + "!";

            } else {
                return "Аз съм " + fName + "!";
            }
        } else {
            if (this.isPolite === true) {
                return p.greet(p) + " Kазвам се " + fName + " " + lName + ".";
            } else {
                return p.greet(p) + " Аз съм " + fName + ".";
            }
        }
    }
    this.bePolite = function (param) {
        this.isPolite = param;
        return this.isPolite;
    }
    this.greet = function (otherPerson) {
        Person = otherPerson;
        return "Здрасти, " + otherPerson.firstName + "!";
    }
    function personGreeting(Person, beFormal) {
        var name = Person.firstName + " " + Person.lastName;

        if (beFormal === true) {
            return "Hello " + name;
        } else {
            return "Hello " + Person.firstName;
        }

    }
}