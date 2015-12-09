function greeting(name) {
    return "Hello, " + name + "!";
}

function personGreeting(person, beFormal) {
    if (beFormal == true) {
        return 'Hello, ' + person.firstName + " " + person.lastName + '!';
    } else
        return "Hi, " + person.firstName + "!";
}

function Person(fname, lname, property) {
    this.firstName = fname;
    this.lastName = lname;
    this.fullName = fname + " " + lname;
    this.isPolite = true;
    this.bePolite = function (tr) {
        this.isPolite = (tr === undefined) ? true : tr;
    };
    this.greet = function (otherPerson) {
        var greeting = "";

        if (this.isPolite) {
            greeting = (otherPerson === undefined) ? "Здравейте!" : "Здравейте, " + otherPerson.fullName + "!";
        } else {
            greeting = (otherPerson === undefined) ? "Здрасти!" : "Здрасти, " + otherPerson.firstName + "!";
        }

        return greeting;
    };
    this.introduce = function (person, bePolite, otherPerson) {
        var greeting = this.greet(otherPerson);
        greeting += " ";
        greeting += (this.isPolite) ? "Казвам се " + this.fullName : "Аз съм " + this.firstName;
        greeting += ".";

        return greeting;
    };

}