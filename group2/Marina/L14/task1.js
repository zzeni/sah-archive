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

function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.fullName = function () {
        return lname + fname;
    }
}
new Person("Boiko", "Borisov");

//task3

function personGreeting(person, beFormal) {
    var name = person.firstName + " " + person.lastName;
    if (beFormal == true) {
        return "Hello, " + name;
    } else {
        return "hi, " + person.firstName;
    }
}


personGreeting(new Person("Boiko", "Borisov"));


//task 4