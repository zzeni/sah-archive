// This script selects the li element that contains an UL
// and removes the list style (the circle to the left)

// NOTE: The same can be done with CSS by applying a class to the LI that is containing the UL. 

$(document).ready(function () {

    $("#myList li:has(ul)").css("list-style-type", "none");
});