function calcAge(input) {
    var inputMod = input.split('-').join(',');
    var birthDate = new Date(inputMod);
    var currentDate = new Date();
    var yourAge = currentDate.getFullYear() - birthDate.getFullYear();
    var mounth = currentDate.getMonth() - birthDate.getMonth();
    var day = currentDate.getDate() - birthDate.getDate();

    if ((mounth == 0 && day == 0) && (yourAge >= 0)) {
        return "Happy Birthday!";
    } else if (yourAge > 100) {
        return "You are immortal";
    } else if (yourAge <= 0) {
        if (yourAge == 0) {
            return "You are a baby!";
        }
        return "You will be on " + (yourAge * (-1));
    } else {
        return "Your age is " + yourAge;
    }
}
