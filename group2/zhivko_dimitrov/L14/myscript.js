"use strict";

function greeting(name) {
    var striiing = "Hello, " + name;
    return striiing;
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;
    this.bePolite = function(bool) {
        this.isPolite = bool;
    }
    this.introduce = function () {
        var stringg;
        if (this.isPolite == false) {
            stringg = "I em " + this.firstName + " " + "and I now verri gut inglish!";
        } else {
            stringg = "Hello, my name is " + this.firstName + " " + this.lastName + "It's nice to meet You!";
        }
        return stringg;
    }
    this.greet = function (otherPerson) {
        var stri;
        if (this.isPolite === true){
            if (otherPerson === undefined) {
                stri = " Hello, my dear!";
            } else {
                stri = "Hello, dear " + otherPerson.firstName + " I am " + this.firstName + ".";
            }
        } else {
            if (otherPerson === undefined) {
                stri = "Wazzzaaa!";
            } else {
                stri = "Hello, " + otherPerson.firstName;
            } 
        }
        return stri;
    }


        console.log(this.firstName, this.lastName, "isPolite: " + this.isPolite);
    }

    function personGreeting(Person, official) {
        var strng;
        if (official == true) {
            strng = "Hello, " + Person.firstName + " " + Person.lastName + "!";
        } else if (official == false) {
            strng = "Hello, " + Person.firstName + "!";
        }

        console.log(strng);
        return strng;

    }