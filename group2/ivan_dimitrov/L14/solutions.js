function greeting(name) {
    return "Hello, " + name + "!";
}

function Person(firstName, lastName, isPolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;
    this.bePolite = function (polite) {
        this.isPolite = (polite === undefined) ? true : polite;
    }

    this.greet = function (otherPerson) {
        if (this.isPolite === false) {
            return "Здрасти, " + otherPerson.firstName + "!";
        } else {
            return "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
        }

    }

    this.introduce = function (otherPerson) {
        var result = "";
        if (otherPerson != undefined && this.isPolite === false) {
            result += this.greet(otherPerson) + " Аз съм " + firstName + ".";
        } else if (otherPerson != undefined && this.isPolite === true) {
            result += this.greet(otherPerson) + " Казвам се " + firstName + " " + lastName + ".";
        } else if (this.isPolite === false) {
            result += "Здрасти, Аз съм " + firstName + ".";
        } else {
            result += "Здравейте, Казвам се " + firstName + " " + lastName + ".";
        }
        return result;
    }
}

function personGreeting(person, beFormal) {
    var fullName = person.firstName + " " + person.lastName;
    if (beFormal === undefined || beFormal === false) {
        return "Hi, " + person.firstName + "!";
    } else {
        return "Hello, " + fullName + "!";
    }
}