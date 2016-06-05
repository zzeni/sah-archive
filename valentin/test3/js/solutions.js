function greeting(name){
	return ("Hello, "  + name + "!");
}

greeting("Pesho");


function Person(fName, lname){
    this.firstName = fName;
    this.lastName = lname;
}
var p = new Person("Valentin", "Nedyalkov");
p;

function personGreeting(person){
	return ("Hello, "  + person.firstName);
	
}

personGreeting(new Person("Valentin", "Nedyalkov"));
