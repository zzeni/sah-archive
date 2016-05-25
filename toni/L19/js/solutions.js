"use strict";

function greeting(name){
	
	return "Hello, "+ name +"!";

}

function Person(firstName, lastName, isPolite){
	this.firstName = firstName;
	this.lastName = lastName;
	this.isPolite = true;	
}

function personGreeting(person, formal){
	if (formal === true){
	return "Hello, "+ person.firstName + " " + person.lastName +"!";
	} else{
	return "Hi, "+ person.firstName +"!";

	}
}

Person.prototype.bePolite = function(value){
	this.isPolite = value;
}

Person.prototype.introduce = function(otherPerson){
	if(this.bePolite === true){
	return this.greet(otherPerson) + "Казвам се " + this.firstName +" "+ this.lastName + ".";
	} else {
	return this.greet(otherPerson) +  "Аз съм " + this.firstName +".";
	} 
}


Person.prototype.greet = function(otherPerson){
	if(otherPerson !== undefined){
		if (otherPerson.isPolite === true){
			return "Здравейте " + otherPerson.firstName + " " + otherPerson.lastName + ". ";
		}else{
			return "Здрасти, " + otherPerson.firstName +"! ";
		}
	} else {
	return "Здрасти! " / "Здравейте! ";
	}
}


var bachkiko = new Person("Bache", "Kiko");
var kirilka = new Person("Kirilka", "Petrova", false);

kirilka.bePolite(true);
bachkiko.introduce(kirilka);