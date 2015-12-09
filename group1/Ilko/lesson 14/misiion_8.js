function Person(fName,lName){
this.firstName = fName;
this.firstName = lName;
this.isPolite = true;
}

this.bePolite = function(polite){
    this.isPolite = polite;
}
 
this.introduce = function () {
        if (this.isPolite == false) {
            return "Аз съм " + this.firstName + "!";
        } else {
            return "Казвам се " + this.firstName + " " + this.lastName + "!";
        }
    }
}










/*Променете метода introduce, така че да връща учтиво представяне, когато isPolite полето е true и неформално представяне, когато isPolite е false

Пример:

var person = new Person("Бойко", "Борисов");

person.introduce(); // “Казвам се Бойко Борисов!”
person.bePolite(false);
person.introduce(); // "Аз съм Бойко!"*/

