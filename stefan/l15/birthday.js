function getAge(birthYear, birthMonth, birthDay) {
  var today = new Date();
  var birthDate = new Date(birthYear, birthMonth-1, birthDay);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

    console.log(getAge(1993, 3, 22));