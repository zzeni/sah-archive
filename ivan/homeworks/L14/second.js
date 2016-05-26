//Task 2 - Same as in the first task, but here we are using higher order functions with callbacks (filter and forEach);
// Copied from: https://repl.it/CPiD

(function () {
    var shoppingCart = [
        {
            name: "apple"
            , type: "fruit"
            , quantity: 5
	}

        
        , {
            name: "banana"
            , type: "fruit"
            , quantity: 2
	}
        
        , {
            name: "potato"
            , type: "vegetable"
            , quantity: 10
	}
        
        , {
            name: "cheese"
            , type: "diry"
            , quantity: 1
	}
        
        , {
            name: "yogurt"
            , type: "diry"
            , quantity: 3
	}
        
        , {
            name: "steak"
            , type: "meat"
            , quantity: 1
	}
        
        , {
            name: "ice cream"
            , type: "sweet"
            , quantity: 1
	}
      
        , {
            name: "bounty"
            , type: "sweet"
            , quantity: 3
	}
];


    // This function accepts a shopping cart list and returns the overall quantity of all the items in it
    function quantity(shoppingCart) {
        var result = 0;
        shoppingCart.forEach(function (element) {
            result += element.quantity;
        });

        return result;
    }

    // This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
    function veganQuantity(shoppingCart) {
        var result = 0;
        var vegans = []
        vegans = shoppingCart.filter(function (element) {
            if (element.type === "vegetable" || element.type === "fruit") {
                return element;
            }
        });

        vegans.forEach(function (element) {
            result += element.quantity;
        });


        return result;
    }


    console.log('overall', quantity(shoppingCart)); // should return 26
    console.log('vegan', veganQuantity(shoppingCart)); // should return 17



    var allItems = "overall: " + quantity(shoppingCart); // should return 26
    var grass = "vegan: " + veganQuantity(shoppingCart); // should return 17

    // Displatying the results to the console.
    console.log(allItems);
    console.log(grass);


    // Displaying the results to the page.
    document.getElementById("3").innerHTML = allItems;
    document.getElementById("4").innerHTML = grass;

}());