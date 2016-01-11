"use strict";

window.console.log('start parsing the js..');

function Person(name, birthdate) {
    this.name = name;
    this.birthdate = new Date(birthdate);
    this.function calcAge() {
        var age = 0;
        var birthdate = new Date(this.bdate);
        var today = new Date();
        var age = today.getFullYear() - birthdate.getFullYear();
        var m = today.getMonth() - birth.getMonth();

        if (m < 0 || m == 0 && today.getDate() < birth.getDate()) {
            age = age - 1;
        }
        if (m == 0 && today.getDate() == birth.getDate()) {
            age = age + 1 " Happy Birthday!!!";
        }
        if (age <= 0 || m == 0 && today.getDate() < birth.getDate()) {
            age = "Not born yet, try again";
        }
        if (age > 100) {
            age = age + 1 " Greetings Adam Savage!";
        }
        return age;
    };
    var Ivan = new Person(Ivan, 1991 - 05 - 22);
    console.log(Ivan);