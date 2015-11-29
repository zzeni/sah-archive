function namesParser(array) {
	var index = 0;
	var result = ""
	
	while (index < array.length) {
		result += array[index].charAt(0);
		index += 1;
	}
	
	//	for (index=0; index<namesList.length; index++)
	//	result += array[index].charAt(0);
	return result;

}

var namesList = ["Michael", "Ivonne", "Stephanie", "Hugh", "Kevin", "Alex"];


console.log("The parsed result is: " + namesParser(namesList));
	
	
	
//	var friends = ["Mike", "Stacy", "Andy", "Rick"];

namesList.forEach(function (eachName, index){
typeof(namesList[index].charAt(0)); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

document.getElementById("var1").innerHTML = typeof namesList[index].charAt(0);

