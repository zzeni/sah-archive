'use strict';

$('form').submit(function (event) {
	event.preventDefault();

	var form = event.target;

	try {
		formValidate(form);
		checkName();
		checkEmail();
		checkPass();
		passConfirm ();
		checkUrl();
	} catch (error) {
		if (error.name === "FieldValidationError") {
			$("#placeError").html(error.message);
			error.target.focus();
			error.target.addClass('error');
		} 
		else {
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

function fieldValidate(form, fieldName) {
	var fieldInput = $(form).find("input[name=" + fieldName + "]");
	var fieldValue = fieldInput.val();
	var error;
	if (fieldValue === "") {
		error = new Error(fieldName + " is mendatory!");
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
	var regN = /^[A-Za-z\s?]+$/;
	var error;
	if (!name.match(regN)) {
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
	var regE = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
	var error;
	if (!email.match(regE)) {
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
	var regP = /^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/;
	var error;
	if (!password.match(regP)) {
		error = new Error("Please enter a correct Password!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
function passConfirm () {
	var fieldInput = $("#confirmPass");
	var password = $("#password").val();
	var error;
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
	var regPic = /^https?:\/\/[\w\.\-\?]+$/;
	var error;
	if (!picture.match(regPic)) {
		error = new Error("Please enter a correct Url!");
		error.name = "FieldValidationError";
		error.target = fieldInput;
		throw error;
	} else {
		fieldInput.removeClass('error');
		$("#placeError").html("");
	}
}
