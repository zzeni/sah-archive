
var name1 = 'Boiko';
var name2 = 'Borisov';

function greeting(name){
    console.log('Hello im ' + name);
};

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.introduce = function introduce(person){

        if(person){
            console.log('Hello, ' + person.firstName + 'Im ' + this.firstName);
        }
        console.log('Здравйте, казвам се ' + this.firstName + ' ' + this.lastName);
    };
    this.isPolite = true;
    this.bePolite = function(value){
        this.isPolite = Boolean(value);
    };
    this.greet = personGreeting(this, this.isPolite);
};

var BateBoiko = new Person('Boiko', 'Borisov');


function personGreeting(person, boolean){

    var result = boolean ? '\"Hello, ' + person.firstName + ' ' + person.lastName + ' !\"' : 'Hi, ' + person.firstName;

    console.log(result);
}


personGreeting(BateBoiko, true);
BateBoiko.introduce();

