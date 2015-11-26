//task 1

 function greeting(name) {
 return "Hello, " + name;
}

greeting("Jeni");

 /*var greeting = function (name) {
    console.log("Hello, " + name)
}

greeting("Jeni"); */

//task 2

function Person (fname, lname) {
   this.firstName = fname;
   this.lastName = lname;
   this.fullName = function() {
return lname + fname;
 }
}
new Person("Boiko", "Borisov");

//task3

function personGreeting(person) {
    var name = person.firstName + "" + person.lastName;
    return "Hello, "+ " " + name;
}
personGreeting(new Person("Boiko"));
 

//task 4
