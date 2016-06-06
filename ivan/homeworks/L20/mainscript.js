/* 
	L20 Homework
	Task that this script solves: We are getting the value of the input and then we add it to an array.
	The button Eraze deletes all the values in the array.
	The button Sort sorts the array via the function sortStash.
	The function showStash attaches the array to the stash div to visualize it.
*/

$(document).ready(function(){
	
	
	if (typeof gitems === "undefined") {	// Checks if there is already something that is defined, so that we do not overwrite it.
		var gitems = {}						// This is my Namespace. The array and showStash and sortStash are attached here. gitems === global items
	}
	else {
		console.log("gitems already defined. Please check the code.");
	}
	
	// Attaching the array and the functions to the namespace
	gitems.stash = [];
	
	gitems.showStash = function showStash() {			// Joins all the values from the array in a single string.
		$("#stash").text(gitems.stash.join(" "));		// A nbsp is used as a delimeter.
	};
	
	gitems.sortStash = function sortStash(stashArg) {	// For sorting the array
		var sortedStash = [];
		
		sortedStash = stashArg.sort(function(a, b) {
			return a - b;
		});
		
		return sortedStash;
	};
	

	$('#submit').click(function (e) {			// Event handler for the submit button
		var givenNumber = $("#number");
	
	if (givenNumber.val() !== "") {				// If the button is pressed and there is a value entered, do...
		gitems.stash.push(+givenNumber.val());	// Adds the value to the stash array (converting it to a number)
		givenNumber.val("");					// Clears the input field
		gitems.showStash();						// Prints the updated stash array
	}

		
	});
	
	$('#sort').click(function (e) {
		
		if (gitems.stash.length > 0) {
			gitems.stash = gitems.sortStash(gitems.stash);	// Sorts the stash
			gitems.showStash();								// Prints the updated stash array
		}
		
	});

	$('#eraze').click(function (e) {
		
		if (gitems.stash.length > 0) {
			gitems.stash.length = 0;	// Deletes all the values in the array (shortcut)
			gitems.showStash();  		//Prints the updated stash array
		}
	});
});