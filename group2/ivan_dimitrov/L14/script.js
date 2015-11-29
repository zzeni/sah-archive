/*1*/

function greeting(name) {
    console.log("Hello " + name);
}

/*2*/
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.isPolite = true;
    this.introduce = function (otherPerson) {
        if (otherPerson != undefined) {
            return this.greet(otherPerson) + "I am " + this.firstName + "!";
        } else if (this.isPolite == false) {
            return "Hey! I'm " + this.firstName + "!";
        } else {
            return "Hello! My name is " + this.firstName + " " + this.lastName + "!";
        }
    }

    if (this.isPolite == true) {
        return "Hello, my name is " + this.firstName + " " + this.lastName;
    } else {
        return "Hi I'm " + this.firstName;
    }

}
this.bePolite = function (isPolite) {
    this.isPolite = isPolite;
}
this.greet = function (otherPerson) {
        if (this.isPolite === false) {
            return "Hey, " + otherPerson.firstName + "!";
        } else {
            return "Hello, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
        }


    }
    /*3*/
function personGreeting(person) {
    var fullName = person.firstName + " " + person.lastName;
    return "Hello, " + fullName;
}

/*4*/
function personGreeting(person, beFormal) {
    var fullName = person.firstName + " " + person.lastName;
    if (beFormal == true) {
        return "Hello, " + fullName;
    }
    if (beFormal == false) {
        return "Hi, " + person.firstName;
    }
}