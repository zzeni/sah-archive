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




/*Направете функция (метод) bePolite() в класа Person. Тя трябва да може да променя isPolite пропъртито по подаден параметър, който може да е true или false

Пример:

var person = new Person("Бойко", "Борисов");

person.isPolite; // true
person.bePolite(false);
person.isPolite; // false */