function greeting(name){
   return "Hello, " + name;
}

console.log(greeting("Jeni"));

function Person (firstName,lastName){
    this.fname = firstName;
    this.lname = lastName;
}

function displayNames(person){
    return person.fname + " " + person.lName;

}

var person = new Person("Бойко", "Борисов")


//other version

function Person(fName,lName){
    this.name = fName+' '+ lName;
    this.introduce=function(){
    return this.name;
    };
}
 var person = new Person("Бойко", "Барисов")
person.introduce();
console.log (person.introduce());

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

function personGreeting(person,beFormal) {
    if(beFormal){
    console.log( "Hi" + person.firstName + person.lastName);
        
    }else {
        console.log( "Hi" + person.firstName);
    }
}

personGreeting(boiko,true)
personGreeting(boiko,false)



/* Направете така, че последната функция да приема още един
параметър beFormal, който може да има стойност true или false. Ако е
true, нека поздрава да е официялен (т.е. по двете имена на човека), а
ако е false - да е само по първо име.
Пример:
var person = new Person(“Бойко”, “Борисов”);
personGreeting(person, true); // “Hello, Бойко Борисов!”
personGreeting(person, false); // “Hi, Бойко!”*/



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


function personGreeting(person, beFormal) {
    var result;
    
    if(beFormal){
        result = "Hi" + " " + person.firstName + " " + person.lastName;
    }
    
    else {
        result = "Hi" + person.firstName;
    }
    return result;
}



personGreeting(boiko,true)
personGreeting(boiko,false)


function Person(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
    
    this.isPolite = true;
    
    this.bePolite = function (param) {
        this.isPolite = param;
    };
}


function Person(fName,lName){
this.firstName = fName;
this.firstName = lName;
this.isPolite = true;
}

this.bePolite = function(polite){
    this.isPolite = polite;
}
 
this.introduce = function () {
        if (this.isPolite == false) {
            return "Аз съм " + this.firstName + "!";
        } else {
            return "Казвам се " + this.firstName + " " + this.lastName + "!";
        }
    }
}



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