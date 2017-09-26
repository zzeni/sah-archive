 "use strict";
 // // 1 задача
 function greeting(name) {
     var message = "Hello " + name;
     return message;
 }
 greeting("Stefi");

 // // 2 задача
 function Person(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.personGreeting = function () {
         console.log('Hi ' + this.firstName);
     };
 }
 var person = new Person('Stefani', 'Katelieva');
 person.personGreeting();

 // //3 задача
 function Person(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.personGreeting = function (Person, beFormal) {

         // // 4 задача
         if (beFormal === true) {
             console.log('Hi ' + this.firstName + " " + this.lastName + " !");
         } else if (beFormal === false) {
             console.log('Hi ' + this.firstName + " !");
         }
     };
 }
 var person = new Person('Stefani', 'Katelieva');
 person.personGreeting(Person, true);
 person.personGreeting(Person, false);
 person.personGreeting();

 //5 задача
 function Person(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.introduce = function () {
         console.log('Hello my name is ' + this.firstName + this.lastName);
     };
 }
 var person = new Person('Stefani', ' Katelieva');
 person.introduce();

 //6 задача
 function Person(firstName, lastName, isPolite) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.isPolite = true;
     this.show = function () {
         console.log(this.firstName + this.lastName + this.isPolite);
     };
 }
 var person = new Person(' Stefani ', ' Katelieva ');
 person.show();

 // 7 задача
 function Person(firstName, lastName, isPolite) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.bePolite = function (isPolite) {
         if (isPolite === true) {
             console.log(this.firstName + this.lastName + 'true');
         } else if (isPolite === false) {
             console.log(this.firstName + this.lastName + 'false');
         }
     };

 }
 var person = new Person(' Stefani ', ' Katelieva ');
 person.bePolite(true);