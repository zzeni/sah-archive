function formValidator() {

    var pass = document.getElementById('pass');
    var confPass = document.getElementById('confPass');
    var pic = document.getElementById('pic');
    var name = document.getElementById('name');
    var email = document.getElementById('email');

    if (isAlphabet(name, "Please enter only letters for your name")) {
        if (isAlphanumeric(pass, "Numbers and Letters Only for Password")) {
            if (PassConfirm(pass, confPass, "The entry doesn`t match your password")) {
                if (emailValidator(email, "Please enter a valid email address")) {
                    if (madeSelection(pic, "Please provide valid picture URL")) {
                        return true;
                    }

                }
            }
        }
    }
    return false;

}

function notEmpty(elem, helperMsg) {
    if (elem.value.length == 0) {
        alert(helperMsg);
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}

function PassConfirm(elem, elem1, helperMsg) {

    if (elem.value === elem1.value) {
        return true;
    } else {
        alert(helperMsg);
        elem1.focus();
        return false;
    }
}

function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function isAlphanumeric(elem, helperMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function lengthRestriction(elem, min, max) {
    var uInput = elem.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        alert("Please enter between " + min + " and " + max + " characters");
        elem.focus();
        return false;
    }
}

function madeSelection(elem, helperMsg) {
    var urlMatch = /^https?:\/\/\w(\w+\.)+/;
    if (elem.value.match(urlMatch)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function emailValidator(elem, helperMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (elem.value.match(emailExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
