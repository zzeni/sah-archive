function tellAge(dateofbirth) {
    var today = new Date();
    var birthDate = new Date(dateofbirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var date = today.getDate() - birthDate.getDate();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
  }
    else if (age < 0) {
        return "Are you from the future?";
    }
    if (age > 99) {
        return "You are ancient!";
    }
    else if (month == 0 && date == 0) {
        return "Happy Birthday!";
    }
    else {
        return age;
    }
}