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

	if (curr_month == birth_month && curr_date > birth_date && birth_year > 1915) {
		return alert("So you are " + (curr_year - birth_year) + " years old.");
	}
	if (curr_month == birth_month && curr_date < birth_date && birth_year > 1915) {
		return alert("So you are " + (curr_year - birth_year - 1) + " years old.");
	}
	if (curr_month > birth_month && birth_year > 1915) {
		return alert("So you are " + (curr_year - birth_year) + " years old.");
	}
	if (curr_month < birth_month && birth_year > 1915) {
		return alert("So you are " + (curr_year - birth_year - 1) + " years old.");
	} 
	else if (birth_year < 1915) {
		return alert("It's not possible to be at " + (curr_year - birth_year) + " years. Check again...");
	} 
	else if (curr_month == birth_month && curr_date == birth_date && birth_year > 1915) {
		return alert("Oh, you have completed " + (curr_year - birth_year) + " years today." + " Happy birthday!");
	}
}

getAge('1928-11-32'); //please enter in format YYYY-MM-DD !

/* 
Main idea for structure was taken by stackoverflow.com, but with many modifications of my side.
I am not sure how stable my code is and if I miss something. 
/*