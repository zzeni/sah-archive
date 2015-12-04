"use strict";

function validate() {
    var emailID = document.myForm.EMail.value;
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    var totchar = emailID.length;


    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();

        return false;
    }

    if (document.myForm.EMail.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }

    if (atpos < 1 || (dotpos - atpos < 2 || totchar - dotpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus();
        return false;
    }

    if (document.myForm.content.value == "") {
        alert("Please state your message!");
        return false;
    }
    return (true);
}
