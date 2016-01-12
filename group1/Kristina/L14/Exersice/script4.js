function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
}

function personGreeting(person, beFormal) {
    var official = beFormal;
    if (official == true) {
        return "Hello," + person.fName + " " + person.lName + "!";
    } else  {
        return "Hi," + person.fName + "!";
    }
}
