function calcAge(day, month, year) {
  var age = 0;
  
  var today = new Date();
  
  var currentDay = today.getDate();
  var currentyMonth = today.getMonth() + 1;
  var currentYear = today.getFullYear();
  
  age = currentYear - year;
  
  if (month > currentyMonth || (month == currentyMonth && day > currentDay)) {
    age -= 1;
  }
  
  if (age < 0) {
    return "You are joking";
  }
  else if (month == currentyMonth && day == currentDay) {
    return "Happy " + age + " Birthday!";
  }
  else {
    return "You are " + age + " old";
  }
}

function calcAge2(dateStr) {
  var dateParts = dateStr.split('-');
  return(calcAge(dateParts[0], dateParts[1], dateParts[2]));
}

function Person(firstName, lastName, birthdate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthdate = birthdate;
}

Person.prototype.tellMyAge = function () {
  return calcAge2(this.birthdate);
};

var sneji = new Person('Sneji', 'Ivanova', '10-08-1988');
console.log(sneji.tellMyAge());

var pesho = new Person('Pesho', 'Ivanov', '10-08-1982');
console.log(pesho.tellMyAge());

