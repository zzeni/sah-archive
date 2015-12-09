function Person(fName,lName) {
 this.firstName = fName;
 this.lastName = lName;
}
 
function personGreeting(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var boiko = new Person("Бойко", "Борисов");

var expectedResult = personGreeting(boiko); // "Hello, Бойко Борисов!"
console.log(expectedResult);