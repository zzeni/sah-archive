'use strict'

function greeting(name) {
	return "Hello, " + name + "!";
}

function personGreeting(Person, beFormal) {
	if (beFormal === true) {
		return "Hello, " + Person.firstName + " " + Person.lastName + "!";
	} else {
		return "Hi, " + Person.firstName + "!";
	}
}


function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.isPolite = true;
	this.greet = function (otherPerson) {
		if (otherPerson != undefined) {
			if (this.isPolite === true) {

				return "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
			} else {
				return "Здрасти, " + otherPerson.firstName + "!";
			}
		} else {
			if (this.isPolite === true) {
				return "Здравейте!";
			} else {
				return "Здрасти!";
			}
		};
	}
	this.bePolite = function (parameter) {
		if (parameter === false) {
			this.isPolite = false;
		} else if (parameter === true) {
			this.isPolite = true;
		}
	};
	this.introduce = function (otherPerson) {
		var result = this.greet(otherPerson)
		if (this.isPolite === true) {
			result += " Казвам се " + this.firstName + " " + this.lastName + ".";
			return result;
		}
		if (this.isPolite === false) {
			result += " Аз съм " + this.firstName + ".";
			return result;
		}
		if (otherPerson == undefined) {
			return result;
		}
	};

}