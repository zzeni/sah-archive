"use strict";
//задача 1
function greeting(name) {
    return ("Hello, " + name);
}
console.log(greeting("Tedy"));


//задача 2
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var people = new Person('Teodora', 'Nikolova');
console.log(people);

//задача 3
function personGreeting(Person) {
    return ("Hi, " + Person.firstName + "!");

}
var newPerson = new Person('Teodora', 'Nikolova');
console.log(personGreeting(newPerson));

//задача 4
function personGreeting(Person, beFormal) {
    if (beFormal === true) {
        return ("Hello, " + Person.firstName + " " + Person.lastName + "!");
    }
    else{
        return("Hi, " +Person.firstName +"!");
    }
}
var newPerson = new Person('Teodora', 'Nikolova');
console.log(personGreeting(newPerson));

//задача 5
function Person(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.introduce=function () {
        return ("Казвам се " + this.firstName + " " + this.lastName + ".");

    }
}
var newPersonIntro=new Person("Tedy","Nikolova");
console.log(newPersonIntro.introduce());

//ОПП учи се