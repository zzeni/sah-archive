function calcAge(bdate) { 
    var age = 0;
    var hasBirthDayToday = false;
    var birthdate = new Date(bdate);
    var today = new Date();
    
    age = today.getFullYear() - birthdate.getFullYear();

    if (today.getMonth() == birthdate.getMonth() && today.getDate() == birthdate.getDate()) {
                    this.hasBirthDayToday = true;
                }
    if (today.getMonth() < birthdate.getMonth()) {
        age = age - 1;
    }
    if (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate()) { 
        age = age -1;
    }
    
    if ( age < 0 || age == 0 && today.getMonth() < birthdate.getMonth() || age == 0 && today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate() ) {
    
        age = "Still waiting!";
    }
    return age;
}

