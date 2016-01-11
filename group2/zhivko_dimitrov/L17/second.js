'use strict';
$('form').find('[name=username]').blur(function (e) {
    e.preventDefault();

    var ajax = $.ajax({
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: 'get',
        data: {
            username: $(this).val()
        }
    });

    ajax.done(function (result) {
        console.log(result);
    });

    ajax.fail(function (error) {
        console.log(error);
    });
});
$('form').find('[name=email]').blur(function (e) {
    e.preventDefault();

    var ajax2 = $.ajax({
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: 'get',
        data: {
            username: $(this).val()
        }
    });

    ajax2.done(function (result) {
        console.log(result);
    });

    ajax2.fail(function (error) {
        console.log(error);
        
    });
});
$('form').find('[name=email]').blur(function (e) {
    e.preventDefault();

    var ajax = $.ajax({
        url: "http://zenifytheweb.com/api/examples/check_username",
        method: 'get',
        data: {
            email: $(this).val()
        }
    });

    ajax.done(function (result) {
        console.log(result);
    });

    ajax.fail(function (error) {
        console.log(error);
    });
});

    $("#nameTag").keyup(function () {var tag = $("#errorCaseName");
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


function validation(){
    var mname = document.getElementById("nameTag").value;
    if (/^[A-Z][a-z]{40}$/.test(mname)) {
        var yu ="thank You " + mname + "!";
        document.getElementById("errorCaseName").innerHTML = yu;
    } else { var yuo = "This is not real name :)";
        document.getElementById("errorCaseName").innerHTML = yuo;
    }
    var email = document.getElementById("emailTag").value;
    if (/^[A-z]+[0-9]*[A-z]*\.?\_?[A-z]*[0-9]*[A-z]*@[A-z]+\.([A-z]{2,13})|(co\.uk)$/.test(email)) {
        document.getElementById("errorCaseMail").innerHTML = "Ok!";
    } else { var p ="This e-mail is not valid!";
        document.getElementById("errorCaseMail").innerHTML = p;
            console.log("not real e-mail")
    }
}