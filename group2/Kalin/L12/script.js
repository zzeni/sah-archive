function calcAge(input) {
    var inputMod = new Date(input);
    var birthDate = new Date(inputMod);
    var currentDate = new Date();
    var yourAge = currentDate.getFullYear() - birthDate.getFullYear();
    var month = currentDate.getMonth() - birthDate.getMonth();
    var day = currentDate.getDate() - birthDate.getDate();

    if ((month == 0 && day == 0) && (yourAge >= 0)) {
        return "Happy Birthday!";
    } else if (yourAge > 100) {
        return "You are immortal";
    } else if (yourAge <= 0) {
        if (yourAge == 0) {
            return "You are a baby!";
        }
        return "You will be on " + (yourAge * (-1));
    } else {
        if ((month <= 0 && day <= 0) && (yourAge >= 0)) {
            return "Your age is " + (yourAge - 1);
        }
        return "Your age is " + yourAge;
    }
}