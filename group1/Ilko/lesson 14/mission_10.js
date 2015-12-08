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