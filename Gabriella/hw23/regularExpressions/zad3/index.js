$(document).ready(function () {
    $("#js-validator-trigger").click(function (e) {
        e.preventDefault();
        validateUsername();
        validatePassword();
        validatePasswordConfirmation();
        validateEmail();
        validateBDay();
        validateUrl();
        
    });
    
    
    function validateUsername() {
        if (!/^[A-Za-z0-9_]+$/i.test($("#username").val())) {
            $("#usernameValidationErrorMessage").html("Only letters (either case), numbers, and the underscore; 3 symbols minimum");
            $("#username").css("border-color", "red");
        } else {
            $("#username").css("border-color", "#ccc");
            $("#usernameValidationErrorMessage").html("");
        }
    }
    
    function validatePassword() {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test($("#password").val())) {
            $("#passwordValidationErrorMessage").html("Atleast one uppercase letter, lowercase letter and special character");
            $("#password").css("border-color", "red");
        } else {
            $("#password").css("border-color", "#ccc");
            $("#passwordValidationErrorMessage").html("");
        }
    }
    
    function validatePasswordConfirmation() {
        if ($("#passwordConf").val() != $("#password").val()) {
            $("#passwordConfValidationErrorMessage").html("Passwords don't match");
            $("#passwordConf").css("border-color", "red");
        } else {
            $("#passwordConf").css("border-color", "#ccc");
            $("#passwordConfValidationErrorMessage").html("");
        }
    }
    
    function validateEmail() {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#email").val())) {
            $("#emailValidationErrorMessage").html("Email does not seem valid!");
            $("#email").css("border-color", "red");
        } else {
            $("#email").css("border-color", "#ccc");
            $("#emailValidationErrorMessage").html("");
        }
    }
    
    function validateBDay() {
        if (!/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/.test($("#bday").val())) {
            $("#bdayValidationErrorMessage").html("Invalid date");
            $("#bday").css("border-color", "red");
        } else {
            $("#bday").css("border-color", "#ccc");
            $("#bdayValidationErrorMessage").html("");
        }
    }
    
     function validateUrl() {
        if (!/^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/.test($("#picUrl").val())) {
            $("#picUrlValidationErrorMessage").html("Url does not seem valid!");
            $("#picUrl").css("border-color", "red");
        } else {
            $("#picUrl").css("border-color", "#ccc");
            $("#picUrlValidationErrorMessage").html("");
        }
    }
})
