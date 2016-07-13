function greeting(name){
  return ("Hello, " + name + "!")
}

greeting("Jeni");

function personGreeting(newPerson, beFormal) {
  if (beFormal) {
    return ("Hello, " + newPerson.firstName + " " + newPerson.lastName + "!");
  } else {
    return ("Hi, " + newPerson.firstName + "!");
  }
}

function Person (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.isPolite = true;
}

Person.prototype.introduce = function(other){
var result;

  if (this.isPolite === true) {
    result = "Казвам се " + this.firstName + " " + this.lastName + ".";
  } else {
    result = "Аз съм " + this.firstName + ".";
  }

return this.greet(other) + " " + result;
};

Person.prototype.bePolite = function(isPoliteChange){
  if (isPoliteChange === false){
    this.isPolite = false; 
  } else {
    this.isPolite = true;
  }
};

Person.prototype.greet = function (otherPerson) {
  if (otherPerson != undefined) {
    if (this.isPolite === false) {
      return "Здрасти, " + otherPerson.firstName + "!";
    } else {
      return "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
    }

  } else {
    if (this.isPolite) {
      return ("Здравейте! ");
    } else {
      return ("Здрасти! ");
    }
  }
}


