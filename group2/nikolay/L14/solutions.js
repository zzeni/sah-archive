"use strict";

function greeting(name) {
  return "Hello, " + name + "!";
}

function Person(firstname, lastname) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.isPolite = true;
  this.bePolite = function(bool) {
    this.isPolite = bool;
  }
  this.greet = function(person) {
    if (this.introduce != undefined && this.isPolite === true) {
      return "Здравейте, " + person.firstName + " " + person.lastName + "!";
    } else if (this.introduce != undefined && this.isPolite === false) {
      return "Здрасти, " + person.firstName + "!";
    } else {
      return "Здрасти, " + person.firstName + "!";
    }
  }
  this.introduce = function(otherPerson) {
    if (otherPerson != undefined) {
      if (this.isPolite === true) {
        return this.greet(otherPerson) + " Казвам се " + this.firstName + " " + this.lastName + ".";
      } else {
        return this.greet(otherPerson) + " Аз съм " + this.firstName + ".";
      }
    } else {
      if (this.isPolite === true) {
        return "Здравейте, Казвам се " + this.firstName + " " + this.lastName + "!";
      } else {
        return "Аз съм " + this.firstName + "!";
      }
    }
  }
}

function personGreeting(person, beFormal) {
  if (beFormal === true) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
  } else {
    return "Hi, " + person.firstName + "!";
  }
}