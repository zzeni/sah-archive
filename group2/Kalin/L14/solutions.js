'use strict';

function greeting(name) {
	return "Hello, " + name + "!";
}

function personGreeting(Person, beFormal) {
	var name = Person.firstName + " " + Person.lastName;

	if (beFormal === true) {
		return "Hello, " + name + "!";
	} else {
		return "Hi, " + Person.firstName + "!";
	}
}

function Person(fName, lName, isPolite) {
	var result;
	this.firstName = fName;
	this.lastName = lName;
	this.isPolite = true;
	this.bePolite = function (param) {
		this.isPolite = param;
		return this.isPolite;
	};
	this.introduce = function (Person) {
		if (Person === undefined) {
			if (this.isPolite === true) {
				result = "Здравейте! Казвам се " + this.firstName + " " + this.lastName + ".";
			} else {
				result = "Аз съм " + this.firstName + ".";
			}
			return result;
		} else {
			if (this.isPolite === true) {
				Person.bePolite(true);
				result = Person.greet(Person) + " " + "Казвам се " + this.firstName + " " + this.lastName + ".";
			} else {
				Person.bePolite(false);
				result = Person.greet(Person) + " " + "Аз съм " + this.firstName + ".";
			}
			return result;
		}
	};
	this.greet = function (otherPerson) {
		if (otherPerson !== undefined) {
			if (this.isPolite === true) {
				result = "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
			} else {
				result = "Здрасти, " + otherPerson.firstName + "!";
			}
		} else {

			if (this.isPolite === true) {
				result = "Здравейте!";
			} else {
				result = "Здрасти!";
			}
		}
		return result;
	};
}