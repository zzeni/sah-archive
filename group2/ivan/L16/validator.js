'use strict';

$('form').submit(function (event) {
	event.preventDefault();

	var form = event.target;

	try {
		formValidate(form);
		checkName();
		checkEmail();
		checkPass();
		passConfirm();
		checkUrl();
	} catch (error) {
		if (error.name === "FieldValidationError") {
			$("#placeError").html(error.message);
			error.target.focus();
			error.target.addClass('error');
		} else {
			throw error;
		}
	}
});

function formValidate(form) {
	fieldValidate(form, 'Name');
	fieldValidate(form, 'Email');
	fieldValidate(form, 'Password');
	fieldValidate(form, 'ConfirmPassword');
	fieldValidate(form, 'PictureURL');
}
var error, checkWithReg;
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
		$("#placeError").html("");
	}
}
function checkName() {
	var fieldInput = $("#name");
	var name = $("#name").val();
	checkWithReg = /^[A-Za-z\s?]+$/;
	if (!name.match(checkWithReg)) {
		error = new Error("Please enter a correct Name!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
function checkEmail() {
	var fieldInput = $("#email");
	var email = $("#email").val();
	checkWithReg = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
	if (!email.match(checkWithReg)) {
		error = new Error("Please enter a correct Email!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
function checkPass() {
	var fieldInput = $("#password");
	var password = $("#password").val();
	checkWithReg = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/;
	if (!password.match(checkWithReg)) {
		error = new Error("Please enter a correct Password!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
function passConfirm() {
	var fieldInput = $("#confirmPass");
	var password = $("#password").val();
	if(fieldInput.val() !== password) {
		error = new Error("Wrong Password Confirmation!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
		} else {
		fieldInput.removeClass('error');
			$("#placeError").html("");
	}
}
function checkUrl() {
	var fieldInput = $("#picture");
	var picture = $("#picture").val();
	checkWithReg = /^https?:\/\/[\w\.\-\?]+$/;
	if (!picture.match(checkWithReg)) {
		error = new Error("Please enter a correct Url!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
