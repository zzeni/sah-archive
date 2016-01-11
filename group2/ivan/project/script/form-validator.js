$('form').submit(function (event) {
	event.preventDefault();
	var form = event.target;

	try {
		formValidate(form);
		checkName();
		checkEmail();
	} catch (error) {

		if (error.name === "FieldValidationError") {
			error.target.removeClass('has-success');
			error.target.addClass('has-error');
		} else {
			throw error;
		}
	}
});

function formValidate(form) {
	fieldValidate(form, 'nameGroup', 'nameSpan', 'Name');
	fieldValidate(form, 'emailGroup', 'emailSpan', 'Email');
}
var error, checkWithReg;

function fieldValidate(form, formGroup, messageSpan, fieldName) {
	var areaInput = $(form).find('#' + formGroup);
	var message = $(form).find('#' + messageSpan);
	var fieldInput = $(form).find("input[name=" + fieldName + "]");
	var fieldValue = fieldInput.val();
	if (fieldValue === "") {
		error = new Error(fieldName + " is mandatory!");
		error.name = "FieldValidationError";
		error.target = areaInput;
		$(message).html(error.message);
		throw error;
	} else {
		areaInput.removeClass('has-error');
		areaInput.addClass('has-success');
		$(message).html("");
	}
}

function checkName() {
	var areaInput = $('#nameGroup');
	var message = $('#nameSpan');
	var fieldInput = $("#name");
	var name = $("#name").val();
	checkWithReg = /^[A-Za-z\s?]+$/;
	if (!name.match(checkWithReg)) {
		error = new Error("Please enter a correct Name!");
		error.name = "FieldValidationError";
		error.target = areaInput;
		$(message).html(error.message);
		throw error;
	} else {
		areaInput.removeClass('has-error');
		areaInput.addClass('has-success');
		$(message).html("");
	}
}

function checkEmail() {
	var areaInput = $('#emailGroup');
	var message = $('#emailSpan');
	var fieldInput = $("#email");
	var email = $("#email").val();
	checkWithReg = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
	if (!email.match(checkWithReg)) {
		error = new Error("Please enter a correct Email!");
		error.name = "FieldValidationError";
		error.target = areaInput;
		$(message).html(error.message);
		throw error;
	} else {
		areaInput.removeClass('has-error');
		areaInput.addClass('has-success');
		$(message).html("");
	}
}