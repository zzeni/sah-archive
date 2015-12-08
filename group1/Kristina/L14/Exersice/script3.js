function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
}

function personGreeting (person) {
    return "Hello," + person.fName + " " + person.lName + "!";
}
