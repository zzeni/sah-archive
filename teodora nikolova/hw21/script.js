//не разбирам що не ми бачка валидацията ако може съпорт


$(document).ready(function () {
    "use strict";

    $("#form").validate({
        rules: {
            Name: {
                required: true,
                minlength: 2
            },
            Email: {
                required: true,
                Email: true
            },
            Password: {
                required: true,
                minlength: 5
            },
            Confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#exampleInputPassword1"
            },
            messages: {
                Name: {
                    required: "Please enter a Name",
                    minlength: "Your Name must be at least 2 characters"
                },
                Password: {
                    required: "Please write a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                Confirm_password: {
                    required: "Please write a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Passwords didn't match"
                }
            }
        }
    });
});






