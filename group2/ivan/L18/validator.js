'use strict';
$('form').submit(function (event) {
	var form = event.target;
	try {
		formValidate(form);
		checkName();
		checkEmail();
		checkPass();
		passConfirm();
		checkUrl();
	} catch (error) {
		event.preventDefault();
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
	fieldValidate(form, 'username');
	fieldValidate(form, 'email');
	fieldValidate(form, 'password');
	fieldValidate(form, 'password_confirmation');
	fieldValidate(form, 'avatar_url');
}
var error, checkWithReg;

function fieldValidate(form, fieldName) {
	var fieldInput = $(form).find("input[name=" + fieldName + "]");
	var fieldValue = fieldInput.val();
	if (fieldValue === "") {
		throw new FieldValidationError(fieldName + " is mandatory!", fieldInput);
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
		throw new FieldValidationError("Please enter a correct Name!", fieldInput);
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
		throw new FieldValidationError("Please enter a correct Email!", fieldInput);
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}

function checkPass() {
	var fieldInput = $("#password");
	var password = $("#password").val();
	checkWithReg = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,}$/;
	if (!password.match(checkWithReg)) {
		throw new FieldValidationError("Please enter a correct Password!", fieldInput);
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}

function passConfirm() {
	var fieldInput = $("#confirmPass");
	var password = $("#password").val();
	if (fieldInput.val() !== password) {
		throw new FieldValidationError("Wrong Password Confirmation!", fieldInput);
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}

function checkUrl() {
	var fieldInput = $("#picture");
	var picture = $("#picture").val();
	checkWithReg = /.*/;
	if (!picture.match(checkWithReg)) {
		throw new FieldValidationError("Please enter a correct Url!", fieldInput);
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}