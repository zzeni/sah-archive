(function () {
    "use strict";

    document.getElementById("submit").addEventListener('click', function (e) {
        e.preventDefault();

        var name, email, noteError;

        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        
        noteError = document.getElementById("placeError");
        noteError.innerHTML = "";


        try {
            if (name === undefined || String(name) === "") {
                throw "You have to enter your Name!";
            } else if (email === undefined || String(email) === "") {
                throw "You have to enter your Email!";
            } else if ((email.indexOf("@") < 1) || (email.lastIndexOf(".") < email.indexOf("@") + 2) || (email.lastIndexOf(".")) == (email.length - 1)) {
                throw "You have to enter a valid email!";
            } else {
                throw noteError.innerHTML;
            }

        } catch (error) {
            noteError.innerHTML = error;
        }
    });
})();