/*Task 1 starts!*/
function greeting(name) {
  return "Hello, " + name + "!";
}
/*Task 1 ends!*/

/*Task 2 starts!*/
function Person(firstName, lastName, isPolite) {
  this.firstName = firstName;
  this.lastName = lastName;
  /*Task 5 starts!
  this.introduce = function () {
      return "Здравейте, казвам се " + firstName + " " + lastName + "!";
    }
    Task 5 ends!*/
  /*Task 6 starts! + included in Person(parameters)*/
  this.isPolite = true;
  /*Task 6 ends!*/
  /*Task 7 starts!*/
  this.bePolite = function (polite) {
      this.isPolite = (polite === undefined) ? true : polite;
    }
    /*Task 7 ends!*/

  /*Task 9 starts!*/

  this.greet = function (otherPerson) {
    if (this.isPolite === false) {
      return "Здрасти, " + otherPerson.firstName + "!";
    } else {
      return "Здравейте, " + otherPerson.firstName + " " + otherPerson.lastName + "!";
    }

  }

  /*Task 9 ends!*/

  /*Tasks 8 + 10 start*/

  this.introduce = function (otherPerson) {
    var result = "";
    if (otherPerson != undefined && this.isPolite === false) {
      result += this.greet(otherPerson) + " Аз съм " + firstName + ".";
    } else if (otherPerson != undefined && this.isPolite === true) {
      result += this.greet(otherPerson) + " Казвам се " + firstName + " " + lastName + ".";
    } else if (this.isPolite === false) {
      result += "Здрасти, Аз съм " + firstName + ".";
    } else {
      result += "Здравейте, Казвам се " + firstName + " " + lastName + ".";
    }
    return result;
  }

  /*Tasks 8 + 10 end*/

}
/*Task 2 ends!*/





/*Task 4 starts!*/
function personGreeting(Person, beFormal) {
  var result = "";
  if (beFormal === false) {
    result += "Hi, " + Person.firstName + "!";
  } else {
    result += "Hello, " + Person.firstName + " " + Person.lastName + "!";
  }
  return result;
}

/*Task 4 ends!*/