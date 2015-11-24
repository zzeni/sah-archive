function calcAge(input) {
    var today = new Date();
    var birthDate = new Date(input);
    var age = today.getFullYear() - birthDate.getFullYear();
    var mounth = today.getMonth() - birthDate.getMonth();
    var day = today.getDate() - birthDate.getDate();
    var result = null;
    if (age < 0) {
    	result = "LOL you are from the future.";
    } else if (age >= 100) {
    	result = "It`s the ODB kid"; 
    } else if (mounth < 0 || (mounth === 0 && day < 0)) {
        age--;
        result = "You are " + age + " years old.";
    } else if (mounth === 0 && day === 0 ) {
		result = "You are " + age + " years old. Happy birthday!!!";
    } else {
    	result = "You are " + age + " years old.";
    }
    document.getElementById("your-age").innerHTML = result;
}

calcAge(prompt("Enter your birthday like this: \n \"1990-02-03\""));