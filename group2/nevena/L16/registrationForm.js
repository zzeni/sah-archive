'use strict';
var errors = {};

$('form').submit(function(event){
	event.preventDefault();
	console.log(event);
	var form = event.target;
	validateForm(form);
	showErrors();
});

var validateForm = function(form){
	var inputs = $(form).find('input');

	$.each(inputs, function(index, input){
		var inputName = $(input).attr("name");
		if (inputName === 'name') {
			if(checkName($(input).val()) === false){
				errors.name = "Invalid name!"
				$(input).addClass('errors');
			}
		}
		else if (inputName === 'email') {
			if(checkEmail($(input).val()) === false){
				errors.email = "Invalid email!";
				$(input).addClass('errors');
			}

		}
		else if (inputName === 'password') {
			if(checkPassword($(input).val()) === false){
				$(input).addClass('errors');
			}
		}
		else if (inputName === 'pictureUrl') {
			if(checkUrl($(input).val()) === false){
				errors.pictureUrl = "Invalid URL!";
				$(input).addClass('errors');
			}
		}
	})
};

var checkName = function(inputValue){
	var re = /^[a-zA-Z ]+$/;
	return re.test(inputValue);
};

var checkEmail = function(inputValue){
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(inputValue);
};

var checkPassword = function(inputValue){
	var confirmPass = $('#confirmpass').val();
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if (inputValue !== confirmPass) {
		errors.password = "Password do not match!";
		return false;
	}
	else if(re.test(inputValue) === false){
		errors.password = "Password does not meet password reqirments!"
	}
	return re.test(inputValue);
};

var checkUrl = function(inputValue){
	var re = /^https?:\/\/\w(\w+\.)+/;
	return re.test(inputValue);
};

var showErrors = function(){
	var div = $('#errorHolder');
	for(var inputName in errors){
		div.append('<p>' + errors[inputName] + '</p>');
	}
};