//task 1
function greeting(name) {
    var name = name;
    return "Hello, " + name + "!";
}


// task 2
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


//task 3
function personGreeting(person) {
    return "Hi, " + person.firstName + "!";
}


//task 4
function personGreeting(person, beFormal) {
    var official = beFormal;
    if (official == true) {
        return "Hello, " + person.firstName + " " + person.lastName + "!";
    } else {
        return "Hi, " + person.firstName + "!";
    }
}


//task 5
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.introduce = function () {
        return "Здравейте, Казвам се " + this.firstName + " " + this.lastName + ".";
    }
}


//task 6
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.introduce = function () {
        return "Здравейте, Казвам се " + this.firstName + " " + this.lastName + ".";
    }
    this.isPolite = true;
}


//task 7
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;

    this.introduce = function () {
        return "Здравейте, Казвам се " + this.firstName + " " + this.lastName + ".";
    }

    this.bePolite = function (polite) {
        this.isPolite = polite;
    }
}




//task 8
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;

    this.bePolite = function (polite) {
        this.isPolite = polite;
    }

    this.introduce = function () {
        if (this.isPolite == false) {
            return "Аз съм " + this.firstName + "!";
        } else {
            return "Казвам се " + this.firstName + " " + this.lastName + "!";
        }
    }
}




//task 9
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;

    this.bePolite = function (polite) {
        this.isPolite = polite;
    }

    this.introduce = function () {
        if (this.isPolite == false) {
            return "Аз съм " + this.firstName + "!";
        } else {
            return "Казвам се " + this.firstName + " " + this.lastName + "!";
        }
    }

    this.greet = function (otherPerson) {
        return this.isPolite ? "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!" : "Здрасти, " + otherPerson.firstName + "!";
    }
}



//task 10
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = true;

    this.bePolite = function (polite) {
        this.isPolite = polite;
    }

    this.introduce = function (otherPerson) {
        if (this.isPolite) {
            return this.greet(otherPerson) + " Казвам се " + this.firstName + " " + this.lastName + ".";
        } else {
            return this.greet(otherPerson) + " Аз съм " + this.firstName + ".";
        }
    }

    this.greet = function (otherPerson) {
        if (otherPerson != undefined) {
            if (this.isPolite) {
                return "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!"
            } else {
                return "Здрасти, " + otherPerson.firstName + "!";
            }
        } else {
            return (this.isPolite ? "Здравейте" : "Здрасти") + "!";
        }
    }
}