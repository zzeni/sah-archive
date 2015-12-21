function calcAge(birthdate) { // "2010-01-23"
    
    var today = new Date();
    var birthdate = new Date(string);
    var age = today.getFullYear() - birthdate.getFullYear();
    
    if (today.getMonth() < birthdate.getMonth()) {
        age = age - 1;
    }
    else if (today.getMonth() == birthdate.getMonth() && today.getDate < birthdate.getDate()) {
        age = age - 1;
    }
    
    return age;
}


function calcAge(birthdate) { // "2010-01-23"
    
    var today = new Date();
    var birthdate = new Date(string);
    var age = today.getFullYear() - birthdate.getFullYear();
    
    var monthDelta = birthdate.getMonth() - today.getMonth();
    var dayDelta = birthdate.getDate() - today.getDate();
    
    if ((monthDelta > 0) || (monthDelta == 0 && dayDelta > 0)) {
    age = age - 1;
        
    if (monthDelta == 0 && dayDelta == 0) {
    sconsole.log("Happy Birthday!");
    
    
    return age;
}

/* other variant
var monthDelta = birthdate.getMonth() - today.getMonth();
var dayDelta = birthdate.getDate() - today.getDate();
                                                                if (monthDelta > 0) {
                                                                        age = age - 1;
                                                                    }
                                                                if (monthDelta == 0 && dayDelta > 0) {
                                                                        age = age - 1;
                                                                    } 
    
if ((monthDelta > 0) || (monthDelta == 0 && dayDelta > 0)) {
    age = age - 1;
}

if (monthDelta == 0 && dayDelta == 0) {
    sconsole.log("Happy Birthday!")
}
*/

function Person(person_name, person_birthdate, country) {
    this.name = person_name;
    this.birthdate = person_birthdate;
    this.hasBirthDayToday = false;
    this.age = calcAge(person_birthdate);
    this.country = country || 'Bulgaria';
}

var p = new Person('Jeni', '1984-06-23');


/* 1vi nachin --> this.hasBirthDayToday = false;
function hasBirthDay(string) {
    var today = new Date();
    var birthdate = new Date(string);
    var age = today.getFullYear() - birthdate.getFullYear();
    
    var monthDelta = birthdate.getMonth() - today.getMonth();
    var dayDelta = birthdate.getDate() - today.getDate();
    
    if (monthDelta == 0 && dayDelta == 0) {
    sconsole.log("Happy Birthday!");
    }
    
    return false;
}    */
        
        
        /*2ri nachin
        calcAge(person)
        var birthdate = new Date(person.birthdate);
        if (monthDelta == 0 && dayDelta == 0) {
        person.hasBirthDayToday = true;
        */







function round(x) { // function for round calculating
    var result = Math.floor(x);
    return result;
}
