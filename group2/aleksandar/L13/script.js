function createPerson(e) {


	e.preventDefault();
	//	name = document.getElementById('name').value;
	//	birth_date = document.getElementById('inp').value;


	var p1 = new Person(document.getElementById('name').value, document.getElementById('inp').value);
	//	this.name = document.getElementById('name').value;
	//	this.birth_date = document.getElementById('inp').value;


	console.log(p1);
}


function Person(name, birthDate) {
	this.name = name;
	this.birth_date = birthDate;
	this.age = tellAge(this);
}


function tellAge(person) {
	var today = new Date();
	var bDate = new Date(person.birth_date);
	var yrs = today.getYear() - bDate.getYear();
	var month = today.getMonth() - bDate.getMonth();

	if (yrs >= 0 && month == 0 && today.getDate() == bDate.getDate()) {
		yrs += " Happy Birthday!";

	} else {
		if (yrs < 0 || ( yrs == 0 && month < 0) || (yrs == 0 && month == 0 && today.getDate() < bDate.getDate())) {
			yrs = "Incorrect data input.";
		} else {
			if (month < 0 || month == 0 && today.getDate() < bDate.getDate()) {
				yrs--;
			} else {}
		}
	}
	return yrs;

}