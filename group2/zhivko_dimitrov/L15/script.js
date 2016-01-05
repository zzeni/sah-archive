"use strict";
function functione(){
    var mname = document.getElementById("nameTag").value;
    if (/^[A-Z][a-z]+$/.test(mname)) {
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