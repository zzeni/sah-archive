"use strict";

this.calcAge = function () {
  var result = 0;
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth = today.getMonth();
  var todayDate = today.getDate();

  var personYear = this.birthdate.getFullYear();
  var personMonth = this.birthdate.getMonth();
  var personDate = this.birthdate.getDate();

  result = todayYear - personYear;

  if (personMonth > todayMonth) {
    result -= 1;
  } else if (personMonth == todayMonth) {
    if (personDate > todayDate) {
      result -= 1;
    } else if (personDate == todayDate) {
      this.hasBirthDayToday = true;
    }
  }

  return result;
}

this.toString = function () {
  var result = "";
  var age = this.calcAge();

  result = "<p><b>Name: </b>" + this.name + "</b><br>";
  result += "<b>Birth date: </b>" + this.birthdate.toDateString() + "</b></p>";

  result += "<p>";

  if (age < 0) {
    result += this.name + " Are You from the future";
  } else if (age > 100) {
    result += this.name + " You are ancient!";
  } else {
    result += this.name + " You are " + age + " years old.";
  }

  if (this.hasBirthDayToday) {
    result += "<br>" + this.name + " has a birthday today!! :)";
  }

  result += "</p>";

  return result;
}

$('#addpers').submit(function (e) {
      e.preventDefault();
      console.log("submited");

      var person = new Person($("#ime").value(), $("#dateb").value());
      var nameContainer = $("<h3 class=" pers - name ">" + person.name + "<h3>");
      var ageContainer = $("<h3 class=" pers = age ">" +person.toString() "<h3>");
  
      $("#people").append(personContainer);
      })

