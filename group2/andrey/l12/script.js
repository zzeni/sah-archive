function calcAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (today.getMonth() == birthDate.getMonth() && today.getDate() == birthDate.getDate()) {
        age += " Happy Birthday";
    }
    if (today.getFullYear() < birthDate.getFullYear() || today.getMonth() < birthDate.getMonth() || today.getDate() < birthDate.getDate()) {
        age = "Please enter valid birth date";
    }
    if (birthDate.getFullYear() < 1910) {
        age = "Please enter valid birth date";
    }
    return age;
}
