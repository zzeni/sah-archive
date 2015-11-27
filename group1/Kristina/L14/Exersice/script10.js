function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
    this.isPolite = true;

    this.bePolite = function (polite) {
        var polite = polite;
        if (polite == false) {
            return this.isPolite = false;
        } else {
            return this.isPolite = true;
        }
    }

    this.introduce = function (otherPerson) {
        var result = this.greet(otherPerson);
        if (this.isPolite == false) {
            return result + "Аз съм " + this.fName + "!";
        } else if (this.isPolite == true) {
            return "Здравейте! Казвам се " + this.fName + " " + this.lName + "!";
        }
    }

    this.greet = function (otherPerson) {
        var otherPerson = otherPerson;
        if (otherPerson != undefined) {
            return "Здрасти, " + otherPerson.fName + "!";
        } else {
            return "Здрасти!";
        }
    }
}