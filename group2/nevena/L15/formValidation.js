"use strict";
/*$(document).ready(function(){

});*/


$('form').submit(function(event){

	event.preventDefault();

	var form = event.target;
	$(form).find('input').removeClass('error');
	try{
		formValidate(form);
	}
	catch(error){
		if (error.name === "FieldValidationError") {
			alert(error.message);
			error.target.focus();
			error.target.addClass('error');
		}else{
			throw error;
		}
	}
	
});

function formValidate(form){
	var nameInput = $(form).find("input[name=name]");
	var nameValue = nameInput.val();
	var error;

	if (nameValue === "") {
		error = new Error("name is mendatory");
		error.name = "FieldValidationError";
		error.target = nameInput;
		throw error;
	}


	var emailInput = $(form).find("input[name=email]");
	var emailValue = emailInput.val();

	if (emailValue === "") {
		error = new Error("email is mendatory");
		error.name = "FieldValidationError";
		error.target = emailInput;
		throw error;
	} else if(checkEmail(emailValue) === false){
		error = new Error("invalid email");
		error.name = "FieldValidationError";
		error.target = emailInput;
		throw error;
	}
}

function checkEmail(emailStr){
	var emailParts = emailStr.split('@');
	var result = false;
	if (emailParts.length === 2) {
		var user = emailParts[0];
		var domain = emailParts[1];
		if (user !== "" && domain.indexOf('.') > 0 && (domain.indexOf('.') < domain.length - 1)) {
			result = true;
		};
	};
	return result;
}