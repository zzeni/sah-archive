function Person (firstName,lastName){
    this.fname = firstName;
    this.lname = lastName;
}

function displayNames(person){
    return person.fname + " " + person.lName;

}

var person = new Person("Бойко", "Борисов")


//other version

function Person(fName,lName){
    this.name = fName+' '+ lName;
    this.introduce=function(){
    return this.name;
    };
}
 var person = new Person("Бойко", "Барисов")
person.introduce();
console.log (person.introduce());


//Направете функция (метод) introduce в класа Person, която да връща стринг, който представя текущия обект (т.е. човека, който е инстанция на класа)

//Пример:

//var person = new Person("Бойко", "Борисов");
//person.introduce(); // "Здравейте, казвам се Бойко Борисов!"