/*Task 1 starts!*/
function greeting(name) {
  return "Hello, " + name;
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
      if (otherPerson != undefined && this.isPolite === false) {
        return this.greet(otherPerson) + " Аз съм " + firstName + "!";
      } else if (otherPerson != undefined && this.isPolite === true) {
        return this.greet(otherPerson) + " Аз съм " + firstName + " " + lastName + "!";
      }
        if (this.isPolite == false) {
          return "Здрасти! Аз съм " + firstName + "!";
        } else {
          return "Здравейте! Казвам се " + firstName + " " + lastName + "!";
        }
      }

      /*Tasks 8 + 10 end*/

    }
    /*Task 2 ends!*/

  /*
  Task 3 starts!

  function personGreeting(Person) {
    return "Hello, " + Person.firstName + " " + Person.lastName +"!";
  }

  Task 3 ends!
  */

  /*Task 4 starts!*/
  function personGreeting(Person, beFormal) {

    if (beFormal === false) {
      return "Hello, " + Person.firstName + "!";
    } else {
      return "Hello, " + Person.firstName + " " + Person.lastName + "!";
    }
  }

  var person = new Person("Бойко", "Борисов");
  /*Task 4 ends!*/