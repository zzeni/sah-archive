'use strict';

function getAge(birth) {
    var today = new Date();
    var curr_date = today.getDate();
    var curr_month = today.getMonth() + 1;
    var curr_year = today.getFullYear();

    var pieces = birth.split('-');
    var birth_date = pieces[2];
    var birth_month = pieces[1];
    var birth_year = pieces[0];

    if (birth_year > 1915 && birth_year <= 2000) {
        if (curr_month >= birth_month && curr_date > birth_date) {
            return alert("So you are " + (curr_year - birth_year) + " years old.");
        }
        if (curr_month < birth_month && curr_date <= birth_date) {
            return alert("So you are " + (curr_year - birth_year - 1) + " years old.");
        } else if (curr_month == birth_month && curr_date == birth_date) {
            return alert("Oh, you have completed " + (curr_year - birth_year) + " years today." + " Happy birthday!");
        }
    } else {
        return alert("It's not possible to be at " + (curr_year - birth_year) + " years. Check again...");
    }
}

getAge('2020-07-04'); //please enter in format YYYY-MM-DD !