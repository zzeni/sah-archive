function namesParser(array) {
    //var result1 = array[0];
    //var result2 = array[1];
    //var result3 = array[2];
   // var result4 = array[3];
   // var result5 = array[4];
   // return result1.charAt(0) + result2.charAt(0) + result3.charAt(0) + result4.charAt(0) +result5.charAt(0);
    result= "";
    
    for(var i=0; i<array.lenght; i++) {
        result = result + array[i].charAt(0);
    }
    return result;
}

var namesList = ["Iva", "Deni", "Eli", "Adi", "Leo"]; //IDEAL

var result = "Nishto";

console.log(namesParser(namesList));