'use strict';
function Person(fname, lname, birthDate) {
    this.first_name = fname;
    this.last_name = lname;
    this.birth_date = birthDate;
    
    //function currenAge parses 
    function currentAge(bD) {
        var birthDayMs = Date.parse(bD);
        var currentDate = Date.now();
        var msOld = currentDate - birthDayMs;
        var daysMs = 1000 * 60 * 60 * 24;
        var yearsMs = daysMs * 365;
        var yearsOld = Math.floor(msOld / yearsMs);
        return yearsOld;
    }
    this.age = currentAge(this.birth_date);
    console.log(this.first_name + " " + this.last_name + " is " + this.age + " years old.");
}
    //showAge makes new object from class Person, takes its years and writes in the html file in new paragraph.
function showAge() {
    var userInputFirstName = document.getElementById("userInputFirstName").value;
    var userInputLastName = document.getElementById("userInputLastName").value;
    var userInputBirthDate = document.getElementById("userInputBirthDate").value;
    var newPerson = new Person(userInputFirstName, userInputLastName, userInputBirthDate);
    var personData =
        userInputFirstName + " " + userInputLastName + " is " +
        newPerson.age + " years old.";
    document.getElementById("theAnswer").innerHTML = personData;
    }