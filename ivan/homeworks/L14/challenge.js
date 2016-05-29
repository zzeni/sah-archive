// Challenge by Zeni in addition to L14 HW.
// Create a filterBy function which returns the filtered results
// it is called in this way: var veganItems = filterBy(someArray, {type: ['vegetable', 'fruit']});

(function () {

    var shoppingCart = [
        {
            name: "apple"
            , type: "fruit"
            , quantity: 5
	}, {
            name: "banana"
            , type: "fruit"
            , quantity: 2
	}, {
            name: "potato"
            , type: "vegetable"
            , quantity: 10
	}, {
            name: "cheese"
            , type: "diry"
            , quantity: 1
	}, {
            name: "yogurt"
            , type: "diry"
            , quantity: 3
	}, {
            name: "steak"
            , type: "meat"
            , quantity: 1
	}, {
            name: "ice cream"
            , type: "sweet"
            , quantity: 1
	}, {
            name: "bounty"
            , type: "sweet"
            , quantity: 3
	}
];


    function filterBy(array, filter) {
        /*
            This is a hard coded version of the filterBy function.
            What it does: for each element of the given array, it checks if the element has a property that is given in the filter
            and if the value of the property matches any of the values in the filter, add the quantity of that item to the result holder;
            Returns: The total quantity of the elements that match any of the types, set in the filter.
        */


        var result = 0;


        array.forEach(function (element) { // for each element in the array

            filter[Object.keys(filter)[0]].forEach(function (type) { // for each filter value in the filter

                if (element[Object.keys(filter)[0]] === type) { // compare if the element has the type in the filter
                    result += element.quantity;
                }
            }); // end of filter[%first key%].forEach

        }); // end of array.forEach


        return result; // the quantity of items that filtered

    } // end of filterBy definition



    var veganItems = filterBy(shoppingCart, {
        type: ['vegetable', 'fruit']
    }); // I've modified the call as I want to avoid the dependency injection

    var bananas = filterBy(shoppingCart, {
        name: ['banana']
    });


    //printing the results to index.html and to the console.
    document.getElementById("5").innerHTML = "\"filterBy\" result: " + veganItems;
    document.getElementById("5").style.fontWeight = "bold";

    document.getElementById("6").innerHTML = "\"filterBy\" result: " + bananas;
    document.getElementById("6").style.fontWeight = "bold";

    console.log("\"filterBy\" result: " + veganItems);
    console.log("\"filterBy\" result: " + bananas);


}());