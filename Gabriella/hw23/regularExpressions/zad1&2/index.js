$(document).ready(function () {
    $("#js-validator-trigger").click(function (e) {
        e.preventDefault();
        if (!(new RegExp(/^[A-Za-z0-9_]+$/i).test($("#username").val()))) {
            $("#usernameValidationErrorMessage").html("Only letters (either case), numbers, and the underscore; 3 symbols minimum");
            $("#username").css("border-color", "red");
        }
    });
    
    $("#password").keyup(function() {
        if (!(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/).test($(this).val()))) {
            $(this).css("border-color", "red");
        } else {
            $(this).css("border-color", "#ccc");
        }
    })
    
    $("#passwordConf").keyup(function() {
        if ($(this).val() != $("#password").val()) {
            $(this).css("border-color", "red");
        } else {
            $(this).css("border-color", "#ccc");
        }
    })
})
