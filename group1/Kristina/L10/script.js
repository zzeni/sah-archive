function namesParser(array) {
    var result1 = array[0];
    var result2 = array[1];
    var result3 = array[2];
    var result4 = array[3];
    return result1.charAt(0) + result2.charAt(0) + result3.charAt(0) + result4.charAt(0);
}

var namesList = ["Iva", "Eli", "Adi", "Leo"];

console.log(namesParser(namesList));