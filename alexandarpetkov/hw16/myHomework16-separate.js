    // Task 1 
//Напишете функция greeting, която приема параметър name
// и като резултат връща стринг, който поздравява.
// greeting("Jeni"); // "Hello, Jeni!"

function greeting(name) {
  return ('Hello, ' + name + '!');
};
// console.log(greeting('Sasho'));



    // Task 2
// Напишете клас Person, който да задава собствено и фамилно име на конструираните обекти.
// new Person("Чък", "Норис"); // Person { firstName: "Чък", lastName: "Норис" }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

};
var Sasho = new Person('Sasho', 'Petkov');
// console.log(Sasho);

    // Task 3
// Направете втора функция, която да поздравява, но я кръстете 
// personGreeting и вместо име, й подавайте обект от тип Person.
// personGreeting(new Person("Чък", "Норис")); // "Hi, Чък!"

function personGreeting (Person) {
    return ('Hi, ' + Person.firstName + '!');
};
var Sasho = new Person('Sasho', 'Petkov');
console.log(personGreeting(Sasho));



    // Task 4
// Направете така, че последната функция да приема още един параметър beFormal,
// който може да има стойност true или false. Ако е true, нека поздрава да е 
// официялен (т.е. по двете имена на човека), а ако е false - да е само по първо име.

// var person = new Person("Чък", "Норис");
// personGreeting(person, true); // "Hello, Чък Норис!"
// personGreeting(person, false); // "Hi, Чък!"
// personGreeting(person); // "Hi, Чък!"


function personGreeting (Person, beFormal) {
    if (beFormal === true) {
        return ('Hello, ' + Person.firstName + ' ' + Person.lastName + '!');
    } else {
        return ('Hi, ' + Person.firstName + '!');
    }
};
var Sasho = new Person('Sasho', 'Petkov');
console.log(personGreeting(Sasho));



    // Task 5
// Направете функция (метод) introduce в класа Person, която да връща стринг,
// който представя текущия обект (т.е. човека, който е инстанция на класа)

// var person = new Person("Чък", "Норис");
// person.introduce(); // "Казвам се Чък Норис."

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.introduce = function () {
        return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
    }
};
var Sasho = new Person('Sasho', 'Petkov');

console.log(Sasho.introduce());



    // Task 6
// Добавете още едно поле (property) в класа Person, което се казва isPolite
// Нека при създаване на обект от този клас, това поле да се задава автоматично на true
// Пример: ...

// var person = new Person("Чък", "Норис"); // Person { firstName: "Чък", lastName: "Норис", isPolite: true }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.introduce = function () {
        return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
    }
   
    this.isPolite = true;
};
var Sasho = new Person('Sasho', 'Petkov');

console.log(Sasho); // isPolite = true;



    // Task 7 - 1 (WORK but NOT match)

// function Person(firstName, lastName, bePolite) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

//     this.bePolite = function () {
//         if (bePolite === false) {
//            this.isPolite = false;
//         } else {
//             this.isPolite = true;
//         }
//     };

//     this.introduce = function () {
//         return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
//     };
// };
// var Sasho = new Person('Sasho', 'Petkov', false);
// // console.log(Sasho);
// console.log(Sasho.introduce());
// console.log(Sasho); 


    // Task 7 
//Направете функция (метод) bePolite() в класа Person. Тя трябва да може да 
// променя isPolite пропъртито по подаден параметър, който може да е true или false 

// var person = new Person("Чък", "Норис");
// person.isPolite; // true
// person.bePolite(false);
// person.isPolite; // false

function Person(firstName, lastName, bePolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

    this.bePolite = function (bePolite) {
        if (bePolite === false) {
           this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    };

    this.introduce = function () {
        return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
    };
};
var Sasho = new Person('Sasho', 'Petkov', false);
console.log(Sasho);




    // Task 8
// Променете метода introduce, така че да връща учтиво представяне, 
// когато isPolite полето е true и неформално представяне, когато isPolite е false
// Пример: ...

//var person = new Person("Чък", "Норис");
// person.introduce(); // “Казвам се Чък Норис.”
// person.bePolite(false);
// person.introduce(); // "Аз съм Чък." 

function Person(firstName, lastName, bePolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

    this.bePolite = function (bePolite) {
        if (bePolite === false) {
           this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    };

    this.introduce = function () {
        if (this.isPolite === true) {
            return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
        } else {
            return ('Аз съм ' + this.firstName + '.');
        }
    };
};
var Sasho = new Person('Sasho', 'Petkov');
console.log(Sasho.bePolite());



    //Task 9
// Направете функция (метод) greet() в класа Person, която получава като параметър друг човек 
// (greet(otherPerson)) и която поздравява другия човек:

// var chuck = new Person("Чък", "Норис");
// var lili = new Person("Лили", "Иванова");

// chuck.greet(lili); // "Здравейте Лили Иванова!"
// chuck.introduce(); // "Казвам се Чък Норис."
// lili.bePolite(false);

// lili.greet(chuck); // "Здрасти, Чък!"
// lili.introduce(); // "Аз съм Лили."

    function Person(firstName, lastName, bePolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

    this.bePolite = function (bePolite) {
        if (bePolite === false) {
           this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    };

    this.introduce = function () {
        if (this.isPolite === true) {
            return ('Казвам се ' + this.firstName + ' ' + this.lastName + '.');
        } else {
            return ('Аз съм ' + this.firstName + '.');
        }
    };

    this.greet = function (otherPerson) {
        if (this.isPolite === true) {
            return ('Здравейте ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!');
        } else {
            return ('Здрасти, ' + otherPerson.firstName + '!');
        }
    };

};
var man1 = new Person('Sasho', 'Petkov');
var lady1 = new Person('Zlatina', 'Iovkova');
// console.log(Sasho);
// console.log(Sasho.introduce());
// console.log(Sasho.bePolite());

console.log(lady1.bePolite(false));
console.log(lady1.greet(man1));
console.log(lady1.introduce());

// console.log(man1.bePolite(true));
// console.log(man1.greet(lady1));
// console.log(man1.introduce());




    // Task 10

// Променете метода introduce, така че да може да получава параметър от тип Person ( introduce(otherPerson) ).
// Kомбинирайте greet и introduce kato използвате резултата от greet(otherPerson) в introduce. 
// Променете greet, така че да проверява дали параметъра otherPerson е подаден ( if (otherPerson !== undefined) {..} ).
// Ако да - тогава поздравете по име (използвайте съответно учтива и неучтива форма, както досега). 
// Ако не е подаден параметър otherPerson, тогава просто върнете само поздрав без име ("Здрасти!" / "Здравейте!")

// var chuck = new Person("Чък", "Норис");
// var lili = new Person("Лили", "Иванова");

// chuck.introduce(); // "Здравейте! Казвам се Чък Норис."

// lili.bePolite(false);
// lili.introduce(chuck); // "Здрасти, Чък! Аз съм Лили."


function Person(firstName, lastName, bePolite) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isPolite = bePolite === undefined ? isPolite = true : isPolite = bePolite;

    this.bePolite = function (bePolite) {
        if (bePolite === false) {
           this.isPolite = false;
        } else {
            this.isPolite = true;
        }
    };

    this.introduce = function (otherPerson) {
        if (otherPerson !== undefined) {
            if (this.isPolite === true) {
                return ('Здравейте ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!' + ' ' +
                'Казвам се ' + this.firstName + ' ' + this.lastName + '.');
            } else {
                return ('Здрасти, ' + otherPerson.firstName + '!' + ' ' +
                'Аз съм ' + this.firstName + '.');
            }
        } else {
            if (this.isPolite === true) {
                return ('Здравейте! ' +
                'Казвам се ' + this.firstName + ' ' + this.lastName + '.');
            } else {
                return ('Здрасти! ' +
                'Аз съм ' + this.firstName + '.');
            }
        }
    };

    // this.greet = function (otherPerson) {
    //     if (this.isPolite === true) {
    //         return ('Здравейте ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!');
    //     } else {
    //         return ('Здрасти, ' + otherPerson.firstName + '!');
    //     }
    // };

};
var man1 = new Person('Sasho', 'Petkov');
// console.log(Sasho);
// console.log(Sasho.introduce());
// console.log(Sasho.bePolite());
var lady1 = new Person('Zlatina', 'Iovkova');
// console.log(man1.bePolite(false));
// console.log(lady1.greet(man1));
// console.log(lady1.introduce());

console.log(lady1.bePolite(false));
console.log(man1.introduce(lady1));
console.log(lady1.introduce(man1));
console.log(lady1.introduce());

