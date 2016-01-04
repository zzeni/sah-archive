"use strict";

function greeting(fname){
	var result = "Hello," + " " + fname + " !";
	return result;
}
 console.log(greeting("Nevena"));

var Person = function (firstname, lastname){
 	this.firstname = firstname;
 	this.lastname = lastname;
 	this.isPolite = true;

 	this.introduce = function (otherPerson){
  		var result = "";
 		result += this.greet(otherPerson);
 		if(this.isPolite == true){
 			result += "Казвам се " + this.firstname + " " + this.lastname + " !";
		}
		else{
			result += "Аз съм " + this.firstname +  " !";
		}
 		return result;
 	}

 	this.bePolite = function(shouldBePolite){
 		if(shouldBePolite == true){
 			this.isPolite = true;
 		}
 		else{
 			this.isPolite = false;
 		}
 	}

 	this.greet = function (otherPerson){
 		var result;
 		if (otherPerson !== "undefined"){
 			if(this.isPolite){
 				result = "Здравейте! ";
 			}
 			else{
 				result = "Здрасти! ";
 			}
 		}
 		else{
 			if (this.isPolite) {
 				result = "Здравейте, " + otherPerson.firstname + "! ";
 			} 
 			else{
 				result = "Здрасти, " + otherPerson.firstname + " !";
 			}
 		}
 		
 		return result;
 	}
 }
var p1 = new Person("Nevena", "Veleva");
console.log(p1);
var p2 = new Person("Baba", "Marta");
/*console.log(p2.introduce(p1));*/
/*console.log(p2.introduce());
p2.bePolite(false);
console.log(p2.isPolite);*/


 function personGreeting(person, beFormal){
 	var result = "";
 	if(beFormal == true){
 		result = "Hello," + " " + person.firstname + " " + person.lastname + " !";
 	}
 	else{
 		result = "Hi," + " " + person.firstname +  " !";
 	}

 	return result;
 }

var person = new Person("Бойко", "Борисов");

person.introduce(); // “Казвам се Бойко Борисов!”
