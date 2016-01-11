"use strict";
$('form').submit(function (event) {
    event.preventDefault();
    var form = event.target;
    try {
        fieldValidate(form, 'name');
        fieldValidate(form, 'email');
        fieldValidate(form, 'message');
        alert("all is OK")
    } catch (error) {
        alert(error.message);
    }
});

function fieldValidate(form, fieldName) {
    var fieldValue = $(form).find('[name=' + fieldName + ']').val();
    if (fieldValue === "") {
        throw new Error(fieldName + " is mendatory");
    };
    if (fieldName === "email" && validateEmail(fieldValue) === false) {
        throw new Error(fieldName + " problem");
    }
    if (fieldName === "message" && fieldValue === "") {
        throw new Error(fieldName + " is mendatory");
    }
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}