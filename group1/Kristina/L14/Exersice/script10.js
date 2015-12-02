function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
    this.isPolite = true;

    this.bePolite = function (polite) {
        this.isPolite = polite;
    }

    this.introduce = function (otherPerson) {
        if (this.isPolite) {
            return "Здравейте! Казвам се " + this.fName + " " + this.lName + "!";
        } else {
            return this.greet(otherPerson) + " Аз съм " + this.fName + "!";
        }
    }

    this.greet = function (otherPerson) {
        var hello = this.isPolite ? "Здравейте" : "Здрасти";
        if (otherPerson != undefined) {
            return hello + ", " + otherPerson.fName + "!";
        } else {
            return hello + "!";
        }
    }
}