// Task 1
function greeting(name) {
    return ('Hello, ' + name + '!');
};
// console.log(greeting('Jeni'));
// END Task 1

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
                return ('Здравейте, ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!' + ' ' +
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

    this.greet = function (otherPerson) {
        if (this.isPolite === true) {
            return ('Здравейте, ' + otherPerson.firstName + ' ' + otherPerson.lastName + '!');
        } else {
            return ('Здрасти, ' + otherPerson.firstName + '!');
        }
    };

};

var man1 = new Person('Jeni', 'Manolova');
var man2 = new Person('Martin', 'Petkov');

console.log(man2.greet(man1));
console.log(man2.introduce());

//console.log(man2.bePolite(false));
//console.log(man1.introduce(man2));
//console.log(man2.introduce(man1));
//console.log(man2.introduce());


//console.log(Jeni);
//console.log(Jeni instanceof Person);


//Tasks 3 and 4
function personGreeting(Person, beFormal) {
    if (beFormal === true) {
        return ('Hello, ' + Person.firstName + ' ' + Person.lastName + '!');
    } else {
        return ('Hi, ' + Person.firstName + '!');
    }
};
var Jeni = new Person('Jeni', 'Manolova');

// console.log(personGreeting(Jeni));
// END Task 3 and 4