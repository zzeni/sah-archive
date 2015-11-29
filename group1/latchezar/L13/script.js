
function tellAge(dateofbirth) {
    var today = new Date();
    var birthDate = new Date(dateofbirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var date = today.getDate() - birthDate.getDate();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    } else if (age < 0) {
        return "Are you from the future?";
    }
    if (age > 99) {
        return "You are ancient!";
    } else if (month === 0 && date === 0) {
        return "Happy Birthday!";
    } else {
        return age;
    }
}

function Person(name, dob, height) {
  this.name = name;
  this.dob = tellAge(dob);
  this.height = height;
}

var person1 = new Person("Latcho", "1993-8-25", "185");
var person2 = new Person("Ico", "1900-01-01", "150") 

console.log(person1);
console.log(person2);