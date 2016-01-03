"use strict";

function validateFieldSuccess(container, messageContent) {
    container.addClass('has-succes');
    container.removeClass('has-error');
    container.find('.form-control-feedback.success').show();
    container.find('.help-block').text(messageContent);
}

function validateFieldError(container, messageContent) {
    container.addClass('has-error');
    container.removeClass('has-success');
    container.find('.form-control-feedback.failure').show();
    container.find('.help-block').text(messageContent);
}




$('.form-control-feedback').hide();

$(document.registrationForm.username).blur(function () {
    var containerUserName = $(this).parent();
    if (this.value.length >= 3) {

        var ajaxProperties1 = {
            url: "http://zenifytheweb.com/api/examples/check_username",
            method: "get",
            data: {
                username: $(this).val()
            }
        };
        var ajax1 = $.ajax(ajaxProperties1);

        ajax1.done(function (response) {
            containerUserName.addClass('has-feedback');
            containerUserName.find('.form-control-feedback').hide();

            if (response === "available") {
                validateFieldSuccess(containerUserName, '');

            } else {
                validateFieldError(containerUserName, 'this username is already taken!');
            }
        });

    } else {
        containerUserName.addClass('has-feedback');
        validateFieldError(containerUserName, 'The username must be at least 3 charcters long!');
    }
});
$(document.registrationForm.email).blur(function () {
    var containerEmail = $(this).parent();
    if (/^[a-z]+[0-9]*[a-z]*\.?\_?[a-z]*[0-9]*[a-z]*@[a-z]+\.([a-z]{2,13})|(co\.uk)$/.test($(this).val())) {

        var ajaxProperties2 = {
            url: "http://zenifytheweb.com/api/examples/check_email",
            method: "get",
            data: {
                email: $(this).val()
            }
        };
        var ajax2 = $.ajax(ajaxProperties2);
        ajax2.done(function (response) {
            console.log(response);
            containerEmail.addClass('has-feedback');
            containerEmail.find('.form-control-feedback').hide();

            if (response === "available") {
                validateFieldSuccess(containerEmail, '');

            } else {
                validateFieldError(containerEmail, 'this e-mail is already used');
            }

        });

    } else {
        containerEmail.addClass('has-feedback');
        validateFieldError(containerEmail, 'this e-mail is not valid');
    }
});


$(document.registrationForm.password_confirmation).blur(function () {
    var containerPasswordConfirmation = $(this).parent();
    var containerPassword = $(document.registrationForm.password).parent();
    containerPassword.addClass('has-feedback');
    containerPasswordConfirmation.addClass('has-feedback');
    containerPassword.find('.form-control-feedback').hide();
    containerPasswordConfirmation.find('.form-control-feedback').hide();
    if ($(this).val() === $(document.registrationForm.password).val()) {
        validateFieldSuccess(containerPasswordConfirmation, '');
        validateFieldSuccess(containerPassword, '');

    } else {
        validateFieldError(containerPasswordConfirmation, 'pasword doesn\'t match');
        validateFieldError(containerPassword, '');
    }
});

$(document.registrationForm.avatar_url).blur(function () {
    var containerUrl = $(this).parent();
    containerUrl.addClass("has-feedback");
    containerUrl.find('.form-control-feedback').hide();
    if (/^https?\:\/\/[A-Z]*[-\/\.a-z]*$/.test($(document.registrationForm.avatar_url).val())) {

        validateFieldSuccess(containerUrl, '');


    } else {
        validateFieldError(containerUrl, "it doesent look like url");
    }

});