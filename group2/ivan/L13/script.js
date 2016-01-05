"use strict";

window.console.log('start parsing the js..');

function Person(name, birthdate) {
    this.name = name;
    this.birthdate = new Date(birthdate);
    this.function tellAge() {
        var today = new Date();
        var age = today.getFullYear() - this.birthdate.getFullYear();
        var m = today.getMonth() - this.birthdate.getMonth();
        if (m < 0 || (m == 0 && today.getDate() < this.birthdate.getDate())) {
            age--;
        }
        if (m == 0 && (today.getDate() == this.birthdate.getDate())) {
            age += " Happy Birthday!!!";
        }
        if (age <= 0 ||(m == 0 && today.getDate() < this.birthdate.getDate())) {
            age = "If you are not Terminator, try an other Date!";
        }
        if (age > 100) {
            age += " Hello Yoda!";
        }
        return age;
    }
    var Ivan = new Person(Ivan, 1985-10-30);
    console.log(Ivan);