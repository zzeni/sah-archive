'use strict';

$('form').submit(function (event) {


	var form = event.target;

	try {
		fieldValidate(form, 'Name');
		fieldValidate(form, 'Email');
		fieldValidate(form, 'Password');
		fieldValidate(form, 'passwordConf');
		fieldValidate(form, 'imgUrl');
		nameValid();
		emailValid();
		passwordValid();
		passwordConfValid();
		picValid();
	} catch (error) {
		event.preventDefault();
		if (error.name === "FieldValidationError") {
			$("#errorLog").html(error.message);
			error.target.focus();
			error.target.addClass('error');
		} else {
			throw error;
		}

	}
});

var error;
var regExpCheck;

function fieldValidate(form, fieldName) {
	var fieldInput = $(form).find("input[name=" + fieldName + "]");
	var fieldValue = fieldInput.val();
	if (fieldValue === "") {
		error = new Error(fieldName + " is mandatory!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}

function nameValid() {
	var fieldInput = $("#name");
	var name = fieldInput.val();
	regExpCheck = /^[A-Za-z\s?]+$/;
	if (!name.match(regExpCheck)) {
		error = new Error("Please enter a valid Name");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}

function emailValid() {
	var fieldInput = $("#email");
	var email = fieldInput.val();
	regExpCheck = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
	if (!email.match(regExpCheck)) {
		error = new Error("Please enter a valid Email");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}

function passwordValid() {
	var fieldInput = $("#password");
	var password = fieldInput.val();
	regExpCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
	if (!password.match(regExpCheck)) {
		error = new Error("Please enter a valid Password");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}

function passwordConfValid() {
	var fieldInput = $("#passwordConf");
	var password = $("#password").val();
	if (fieldInput.val() !== password) {
		error = new Error("Passwords must match");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}

function picValid() {
	var fieldInput = $("#imgUrl");
	var picture = fieldInput.val();
	regExpCheck = /.*/;
	if (!picture.match(regExpCheck)) {
		error = new Error("Please enter a valid Url");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#errorLog").html("");
	}
}