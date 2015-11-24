"use strict";

function getAge(birth) {
    var today = new Date();
    var now_date = today.getDate();
    var now_month = today.getMonth() + 1;
    var now_year = today.getFullYear();

    var pieces = birth.split('-');
    var birth_date = pieces[2];
    var birth_month = pieces[1];
    var birth_year = pieces[0];

    if (now_month === birth_month && now_date > birth_date && birth_year > 1910) {
        return alert("You are " + (now_year - birth_year) + " years old.");
    }
    if (now_month === birth_month && now_date < birth_date && birth_year > 1910) {
        return alert("You are " + (now_year - birth_year - 1) + " years old.");
    }
    if (birth_year < 1910) {
        return alert("You couldn't be so old...");
    }
    if (birth_year > 2015) {
        return alert("You will be born after " + (birth_year - now_year) + " years.");
    }
    if (now_month === birth_month && now_date === birth_date && birth_year > 1910) {
        return alert(" Happy birthday!");
    }
}

getAge('2016-11-24');