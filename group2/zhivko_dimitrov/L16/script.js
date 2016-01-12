'use strict';
$("#passwordTag2").keyup(function () {
    if ($(this).val() === $("#passwordTag1").val()) {
        $("#passwordMatch").text("Password match!");
    } else {
        $("#passwordMatch").html("password <b>does NOT</b> match");
    }

});

$("#nameTag").keyup(function () {
    var tag = $("#errorCaseName");
    if ((/^[A-Z]([a-z]+)$/).test($(this).val())) {
        tag.text("Thank You " + $(this).val() + "!");
        


    } else {
        tag.text("This is not a real name :)");
    }
});
$("#emailTag").keyup(function () {
    if ((/^[a-z]+[0-9]*[a-z]*\.?\_?[a-z]*[0-9]*[a-z]*@[a-z]+\.([a-z]{2,13})|(co\.uk)$/).test($(this).val())) {
        $("#errorCaseMail").text("Ok!");

        
    } else {
        var p = "This e-mail is not valid!";
        $("#errorCaseMail").text(p);
        console.log("not real e-mail");
    }
});