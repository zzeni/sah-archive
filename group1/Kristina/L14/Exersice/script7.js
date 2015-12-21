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
}