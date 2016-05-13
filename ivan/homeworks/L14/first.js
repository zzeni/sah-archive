// We have two functions. They are returning the specified quantity of items.
// Copied from: https://repl.it/CPaV/11

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

        for (var i = 0; i < shoppingCart.length; i++) {
            result += shoppingCart[i].quantity;
        }

        return result;
    }

    // This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
    function veganQuantity(shoppingCart) {
        var result = 0;

        for (var i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].type === "vegetable" || shoppingCart[i].type === "fruit") {

                result += shoppingCart[i].quantity;
            }
        }
        return result;
    }

    var allItems = "overall: " + quantity(shoppingCart); // should return 26
    var grass = "vegan: " + veganQuantity(shoppingCart); // should return 17

    // Displatying the results to the console.
    console.log(allItems);
    console.log(grass);


    // Displaying the results to the page.
    document.getElementById("1").innerHTML = allItems;
    document.getElementById("2").innerHTML = grass;



}());