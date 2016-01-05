function Person(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
    
    this.isPolite = true;
    
    this.bePolite = function (param) {
        this.isPolite = param;
    };
}


/*Направете функция (метод) bePolite() в класа Person. Тя трябва да може да променя isPolite пропъртито по подаден параметър, който може да е true или false

Пример:

var boiko = new Person("Бойко", "Борисов");

boiko.firstName; // = "boiko"
boiko.bePolite("Zdravei");// boiko.isPolite = "Zdravei"
boiko.isPolite; // false*/