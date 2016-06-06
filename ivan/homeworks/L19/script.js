// L19 HW, Validate every input field in index.html via RegEx

$(document).ready(function () {
    'use strict';


    // This event handler gets the entered value in the input field, the id of the field and it's parent.
    // Then compares the id and checks the value against the regular expressions. passChecked is for if the original password is ok.
    $('input').blur(function (event) {
        var value = $(this).val();
        var id = $(this).attr("id");
        var theParent = $(this).parent();
        var passChecked = "";

        var nameRE = /^[a-zA-Z0-9_-]{4,10}$/;
        var emailRE = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var passRE = /^[a-zA-Z0-9_-]{5,10}$/;
        var birthRE = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        var pictureRE = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|gif|png)$/;


        if (id === "name") {
            check(nameRE, value, theParent);
        } else if (id === "email") {
            check(emailRE, value, theParent);
        } else if (id === "password") {
            passChecked = check(passRE, value, theParent);

            // In this case we are also checking the second pass if we have green value for the original.
            if ($("#passwordSecond").val() !== "" && passChecked === "green") {
                check($("#password").val(), $("#passwordSecond").val(), $("#passwordSecond").parent());
            }
        } else if (id === "passwordSecond") {
            // Here we are checking the original pass.
            // If it is green, then check the value of second password against the first.
            // If it is default, check against the RE
            // If it is red, set Error state.

            passChecked = check(passRE, $("#password").val(), $("#password").parent());

            if (passChecked === "green") {
                check($("#password").val(), value, theParent);
            } else if (passChecked === "default") {
                check(passRE, value, theParent); // HERE IS THE BUG
            } else {
                setError(theParent);
            }


        } else if (id === "bday") {
            check(birthRE, value, theParent);
        } else if (id === "picture") {
            check(pictureRE, value, theParent);
        }


    });

    function setError(parent) {
        parent.addClass('has-error');
        parent.find('.error').show();
    }

    function good2go(parent) {
        parent.addClass('has-success');
        parent.find('.error').hide();
    }

    function cleanClass(parNT) {
        if (parNT.hasClass("has-error")) {
            parNT.removeClass("has-error");
            parNT.find(".error").hide();
        }
        if (parNT.hasClass("has-success")) {
            parNT.removeClass("has-success");
        }
    }


    function check(RE, elementVal, parentArg) {
        var status = '';


        if (Boolean(elementVal.match(RE))) {

            cleanClass(parentArg);
            good2go(parentArg);

            status = "green";

        } else if (!Boolean(elementVal.match(RE)) && elementVal !== "") {
            cleanClass(parentArg)
            setError(parentArg);

            status = "red";

        } else {
            cleanClass(parentArg);

            status = "default";
        }

        return status;

    }
});