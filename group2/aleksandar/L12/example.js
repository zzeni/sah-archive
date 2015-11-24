//function Person(fname, lname, bDate) {
//	this.first_name = fname;
//	this.last_name = lname;
//	this.birth_date = bDate;
//}

var birthDate = "";

function tellAge() {
	var today = new Date();
	var bDate = new Date(birthDate);
	var yrs = today.getYear() - bDate.getYear();
	var month = today.getMonth() - bDate.getMonth();

	if (yrs >= 0 && month == 0 && today.getDate() == bDate.getDate()) {
		yrs += " Happy Birthday!";

	} else {
		if (yrs <= 0 && month <= 0 && today.getDate() < bDate.getDate()) {
			yrs = "Incorrect data input.";
		} else {
			if (month < 0 || month == 0 && today.getDate() < bDate.getDate()) {
				yrs--;
			} else {}
		}
	}
	return yrs;
}
console.log(tellAge(birthDate));