function tellAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var mounth = today.getMonth() - birthDate.getMonth();
    if (age < 0) {
    	document.getElementById("your-age").innerHTML = "LOL you are from the future.";
    } else if (age >= 100) {
    	document.getElementById("your-age").innerHTML = "It`s the ODB kid"; 
    } else if (mounth < 0 || (mounth === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        document.getElementById("your-age").innerHTML = ("You are " + age + " years old.");
    } else if (mounth === 0 && today.getDate() === birthDate.getDate()) {
		document.getElementById("your-age").innerHTML = ("You are " + age + " years old. Happy birthday!!!");
    } else {
    	document.getElementById("your-age").innerHTML = ("You are " + age + " years old.");
    }
}

tellAge(prompt("Enter your birthday like this: \n \"1990-02-03\""));