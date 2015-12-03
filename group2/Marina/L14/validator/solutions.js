//task 1 
function greeting(name) {
    return "Hello, " + name + "!";
}

//task 2 , 5, 6, 7, 8, 9, 10 
function Person(fname, lname, isPolite) {
    this.firstName = fname;
    this.lastName = lname;
    this.fullName = fname + " " + lname;
    this.isPolite = true;
    this.greet = function (otherPerson) {
        if (this.isPolite === false) {
            return "Здрасти, " + otherPerson.firstName + "!";
        } else {
            return "Здравейте, " + otherPerson.fullName + "!";
        }
    }
    var otherPerson = otherPerson;
    this.introduce = function (otherPerson) {
        var result = "";
        if (otherPerson != undefined && this.isPolite === false) {
            result += this.greet(otherPerson) + "Аз съм " + this.firstName + ".";
        }
        return "Kазвам се " + this.firstName;
    }
    this.bePolite = function (isPolite) {
        result = "";
        if (isPolite === false) {
            return "Аз съм " + this.firstName;
        } else if (otherPerson != undefined && this.isPolite === true) {
            result += this.greet(otherPerson) + "Казвам се " + this.fullName + ".";
        } else if (this.isPolite === false) {
            result += "Здрасти, аз съм " + this.firstName + ".";
        } else {
            result += "Здравейте, казвам се " + this.fullName + ".";
        }
        return result;
    }

}

//task 3, 4
function personGreeting(Person, beFormal) {
    var result = "";
    if (beFormal === false) {
        return "Hello, " + Person.fullName + "!";
    } else {
        return "Hi, " + Person.firstName + "!";
    }
    return result;
}