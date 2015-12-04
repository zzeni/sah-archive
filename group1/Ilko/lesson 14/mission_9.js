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
