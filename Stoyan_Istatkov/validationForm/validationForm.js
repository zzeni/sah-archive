/**
 * Created by STEVIS on 5/18/2017.
 */


$(document).ready(function () {
    "use strict";

    var valName = /^[a-zA-Z ]{2,30}$/;
    var valFamily = /^[a-zA-Z ]{2,30}$/;
    var valEmail = /^[A-Za-z][\w\.\-\_\d]+@[a-z]+[\.][a-z]+$/;
    var valPhone = /^(\+|00)359 ?\d{3} ?\d{3} ?\d{3}$/;
    var valPassword = /^[0-9a-zA-Z_]{3,}$/;


    $("button").on("click", function (event) {

        var name  = $("#user_name").val();
        var family = $("#family_name").val();
        var email = $("#user_email").val();
        var phone = $("#user_phone").val();
        var password = $("#user_password").val();


        event.preventDefault();

        if (( name === "" ) || ( family === "" ) || ( email === "" ) || ( phone === "" ) || ( password === "" ) ) {

            $("#button-error-field").html("Empty inputs !!!");
            $("button").addClass("disabled");
        }
        else {
            $("#button-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_name").on("blur", function () {

        var name  = $(this).val();

        if (!valName.test(name)) {

            $("#username-error-field").html("Only letters ; 2 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#username-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#family_name").on("blur", function () {

        var family = $(this).val();

        if (!valFamily.test(family)) {

            $("#familyName-error-field").html("Only letters ; 2 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#familyName-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_email").on("blur", function () {

        var email = $(this).val();

        if (!valEmail.test(email)) {

            $("#email-error-field").html("*****@*****.domain");
            $("button").addClass("disabled");
        }
        else {
            $("#email-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_phone").on("blur", function () {


        var phone = $(this).val();

        if (!valPhone.test(phone)) {

            $("#phone-error-field").html("359 **** *** ***");
            $("button").addClass("disabled");
        }
        else {
            $("#phone-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

    $("#user_password").on("blur", function () {

        var password = $(this).val();

        if (!valPassword.test(password)) {

            $("#password-error-field").html("Only letters (either case), numbers, underscore; 3 symbols minimum");
            $("button").addClass("disabled");
        }
        else {
            $("#password-error-field").html("");
            $("button").removeClass("disabled");
        }
    });

});

