function tellAge(dateofbirth) {
    var today = new Date();
    var birthDate = new Date(dateofbirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();
    if (age == 0) {
        if (m == 0) {
            if (d == 0) {
                age="Happy birthday";
            }
        }
    }
    else if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
  }
    return age;
}