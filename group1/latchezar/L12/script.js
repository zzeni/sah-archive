function tellAge(dateofbirth) {
    var today = new Date();
    var birthDate = new Date(dateofbirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var date = today.getDate() - birthDate.getDate();
    if (age == 0) {
        if (month == 0) {
            if (date == 0) {
                age="Happy birthday";
            }
        }
    }
    else if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
  }
    if (age < 0) {
        return "Are you from the future?";
    }
    else if (age > 99) {
        return "You are ancient!";
    }
    else {
        return age;
    }
}