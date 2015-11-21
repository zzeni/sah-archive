var birthDate = ""; // Enter string, for example: "1985-10-30"
function tellAge() {
    var today = new Date();
    var birth = new Date(birthDate);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || m == 0 && today.getDate() < birth.getDate()) {
        age--;
    }
    if (m == 0 && today.getDate() == birth.getDate()) {
        age += " Happy Birthday!!!";
    }
    if (age <= 0 || m == 0 && today.getDate() < birth.getDate()) {
        age = "If you are not Terminator, try an other Date!";
    }
    if (age > 100) {
        age += " Hello Yoda!";
    }
    return age;
};
console.log(tellAge(birthDate));