function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
    this.isPolite = true;
    
    this.bePolite = function(polite) {
        var polite = polite;
        if (polite == false) {
            return this.isPolite = false;
        }
    }
    
    this.introduce = function () {
        if (this.isPolite == false) {
            return "Аз съм " + this.fName + "!";
        } else {
            return "Казвам се " + this.fName + " " + this.lName + "!";
        }
    }
    
    this.greet = function (otherPerson) {
        var otherPerson = otherPerson;
        return "Здрасти, " + otherPerson.fName + "!";
    }
}