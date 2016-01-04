"use strict";

$('form').submit(function (event) {
	var fname = document.forms["contactForm"]["firstname"].value;
	var lname = document.forms["contactForm"]["lastname"].value;
	var email = document.forms["contactForm"]["email"].value;
	var country = document.forms["contactForm"]["select-country"].value;
	var textarea = document.forms["contactForm"]["message"].value;
	var atSign = email.indexOf("@");
	var dot = email.lastIndexOf(".");
	if (fname == null || fname == "") {
		alert("First name field must be filled");
		return false;
	} else if (lname == null || lname == "") {
		alert("Last name field must be filled");
		return false;
	} else if (atSign < 1 || dot < atSign + 2 || dot + 2 >= email.length) {
	    alert("Please enter valid e-mail address");
	    return false;
	} else if (country == null || country == "") {
		alert("Please select country");
		return false;
	} else if (textarea == null || textarea == "" || textarea == "Your message") {
		alert("Please enter your message");
		return false;
	}
});
