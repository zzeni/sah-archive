function namesParser(array) {
	var index = 0;
	var result = ""
	
	while (index < array.length) {
		result += array[index].charAt(0);
		index += 1;
	}
	
	//	for (index=0; index<namesList.length; index++)
	//	result += array[index].charAt(0);
	return namesList.forEach(
	return result;

}

var namesList = ["Patricia", "Ivonne", "Stephanie", "Hugh", "Kevin", "Alex"];


console.log("The parsed result is: " + namesParser(namesList));