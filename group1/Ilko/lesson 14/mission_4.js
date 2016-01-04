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
