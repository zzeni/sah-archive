function greeting(name) {
    return "Hello, " + name;
}

function Person(fname, lname, isPolite) {
    this.firstName = fname;
    this.lastName = lname;
    this.isPolite = true;
    this.introduce = function (otherPerson) {
        var result = "";
        if (this.isPolite === true) {
            if (otherPerson === undefined) {
                result += "Здравейте! Казвам се " + this.firstName + " " + this.lastName + "!";
            } else {
                result += "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!" + " Казвам се " + this.firstName + " " + this.lastName + "!";
            }
        }
        if (this.isPolite === false) {
            if (otherPerson === undefined) {
                result += "Здрасти! Аз съм " + this.firstName + "!";
            } else {
                result += "Здрасти, " + otherPerson.firstName + "! Аз съм " + this.firstName + "!";
            }
        }
        return result;
    }
    this.bePolite = function (polite) {
        if (polite === true) {
            this.isPolite = true;
        } else {
            this.isPolite = false;
        }
    }
    this.greet = function (otherPerson) {
        if (this.isPolite === true) {
            return " Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
        } else {
            return "Здрасти, " + otherPerson.firstName + "!";
        }
    }
}

function personGreeting(Person, beFormal) {
    if (beFormal === true) {
        return "Hello, " + Person.firstName + " " + Person.lastName + "!";
    } else {
        return "Hi, " + Person.firstName;
    }
}