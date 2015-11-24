function namesParser(array) {
    var result = "";
    return result += array[0].charAt(0);
    return result + = array[1].charAt(0);
    return result + = array[2].charAt(0);
    return result + = array[3].charAt(0);
    //    return result1.charAt(0) + result1.charAt(0) + result2.charAt(0) + result3.charAt(0);
    var inddex = 0;

    while (index < array.length) {
        result += array[index].chastAt(0);
        index += 1;
    }

    //    var namesList = ["Iva", "Eli", "Adi", "Leo"]; // "IEAL"

    for (var i = 0; i < array.length; i += 1) {
        result += array[i].chatAt(0);
    }

    return result;
}

var nameList = ["Iva", "Dani", "Eli", "Adi", "Leo"]; // "IDEAL"


console.log "The parsed result is: " + namesParser(namesList));

//    function square(x) {
//        return x * x;
//    }
//
//    var myNumber = 5;
//
//    console.log("The square is: " + square(myNumber));
