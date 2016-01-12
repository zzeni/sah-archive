"use strict";

// Initially hide the validation icons of the username field
$('.form-control-feedback').hide();

$(document.registrationForm.username).blur(function () {
  if (this.value.length >= 3) {

    var ajaxProperties = {
      url: "http://zenifytheweb.com/api/examples/check_username",
      method: "get",
      data: {
        username: $(this).val()
      }
    };

    var ajax = $.ajax(ajaxProperties);

    ajax.done(function (response) {
      var usernameEl = document.registrationForm.username;
      var container = $(usernameEl).parent();
      container.addClass('has-feedback');
      container.find('.form-control-feedback').hide();

      if (response === "available") {
       addClassSuccess(container);

      } else {
       showError(container, 'This username is taken');
      }
    });
  } else {
      var usernameEl = document.registrationForm.username;
      var container = $(usernameEl).parent();
      container.addClass('has-feedback');
      showError(container, 'The username must be at least 3 characters long');
  }
});
$(document.registrationForm.email).blur(function(event){
	var email = $(event.target).val();
	var container = $(event.target).parent();
    container.addClass('has-feedback');
    container.find('.form-control-feedback').hide();
	checkEmail(container, email);
});
$(document.registrationForm.password_confirmation).blur(function(event){
	var passConfirm = $(event.target).val();
	var container = $(event.target).parent();
    container.addClass('has-feedback');
    container.find('.form-control-feedback').hide();
    checkPassword(container, passConfirm);
});
$(document.registrationForm.avatar_url).blur(function(event){
	var avatarUrl = $(event.target).val();
	var container = $(event.target).parent();
    container.addClass('has-feedback');
    container.find('.form-control-feedback').hide();
    checkUrl(container, avatarUrl);
})
var addClassSuccess = function(container){
	container.addClass('has-success');
	container.removeClass('has-error');
	container.find('.form-control-feedback.success').show();
	container.find('.help-block').text('');
}

var showError = function(container, text){
	container.addClass('has-error');
	container.removeClass('has-success');
	container.find('.form-control-feedback.failure').show();
	container.find('.help-block').text(text);
}

var checkEmail = function(container, inputValue){
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(inputValue) === true){
    	addClassSuccess(container);
    } 
    else{
    	showError(container, 'Invalid email!');
    }
};

var checkPassword = function(container, inputValue){
	var pass = $('#password').val();
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if (inputValue !== pass) {
		showError(container, "Password do not match!");
		return false;
	}
	else if(re.test(inputValue) === false){
		showError(container, "Password does not meet password reqirments!");
	} 
	else{
		addClassSuccess(container);
	}
};

var checkUrl = function(container, inputValue){
	var re = /^https?:\/\/\w(\w+\.)+/;
	if(re.test(inputValue) === true){
		addClassSuccess(container);
	}
	else{
		showError(container, "Invalid URL!")
	}
};
