 "use strict";

 $('form').submit(function (event) {
     event.preventDefault();

     var form = event.target;

     try {
         formValidate(form);
     } catch (error) {
         if (error.name === "FieldValidationError") {
             //      alert(error.message);
             error.target.focus();
             error.target.addClass('error');
         } else {
             hrow error;
         }
     }
 });

 function formValidate(form) {
     fieldValidate(form, 'name');
     fieldValidate(form, 'email');
 }

 function fieldValidate(form, fieldName) {
     var fieldInput = $(form).find("input[name=" + fieldName + "]");
     var fieldValue = fieldInput.val();

     if (fieldValue === "") {
         var error = new Error(fieldName + " is mendatory");
         error.name = "FieldValidationError";
         error.target = fieldInput;

         throw error;
     } else {
         fieldInput.removeClass('error');
     }
 }