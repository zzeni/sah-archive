"use strict";

$(document.registrationForm.username).blur(function () {
    var ajaxProperties = {
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: "get",
        data: {
            username: $(this).val()
        }
    };
    var ajax = $.ajax(ajaxProperties);
    ajax.done(function (response) {
        if (response == 'taken') {
            alert("User exists");
            document.registrationForm.username.focus();
        } else if (response == 'available') {
            alert("User is available");
        } else {

            throw new Error("Error");
        }
    });
});
function validate() {
    var emailID = document.myForm.email.value;
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    var totchar = emailID.length;


    if (document.myForm.username.value == "") {
        alert("Please provide your name!");
        document.myForm.username.focus();

        return false;
    }

    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.email.focus();
        return false;
    }

    if (atpos < 1 || (dotpos - atpos < 2 || totchar - dotpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.content.value == "") {
        alert("Please state your message!");
        return false;
    }
    return (true);
}
