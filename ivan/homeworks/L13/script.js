/* 
Homework L13: 
Last change: 5/10/2016/ 23:30h
*/
var myArray = [7, 1, 9, 1, 3, 4];
var myValue = 9;
var cars = [
    {
        brand: "citroen"
        , color: "grey"
        , engine: "2.5"
 }

    
    , {
        brand: "dacia"
        , color: "blue"
        , engine: "2.2"
 }

    
    , {
        brand: "citroen"
        , color: "red"
        , engine: "2.1"
 }

    
    , {
        brand: "opel"
        , color: "red"
        , engine: "1.9"
 }

    
    , {
        brand: "subaru"
        , color: "black"
        , engine: "2.4"
 }

    
    , {
        brand: "ford"
        , color: "blue"
        , engine: "2.1"
 }
];



//////////////////// Higher order functions /////////////////////////


function callback(item, value) {
    /*
    small helper function that is used as a callback by lessOrGreaterThan
    */
    if (typeof item === "number") {
        if (item < value) {
            return 1;
        } else if (item === value) {
            return 0;
        } else {
            return -1;
        }
    }


}



function lessOrGreaterThan(callback, array) {
    /*
    returns true if the condition in the callback function is true atleast once and false otherwise
    */
    var result = [];


    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], 3) === 1) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}


function FilterByAttr(array, attribute) {
    /*
    searches for keys in the array that matches the one in the attribute, then compares the two values
    */
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i][Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]]) {
            result.push(array[i].brand.toString());
        }
    }

    return result;
}






// calling lessOrGreaterThanResult and FilterByAttr
var lessOrGreaterThanResult = "lessOrGreaterThan: " + lessOrGreaterThan(callback, myArray);
var FilterByAttrResult = "FilterByAttr: " + FilterByAttr(cars, {
    color: "blue"
});

// showing the returned value
document.getElementById("1").innerHTML = lessOrGreaterThanResult;
document.getElementById("2").innerHTML = FilterByAttrResult;