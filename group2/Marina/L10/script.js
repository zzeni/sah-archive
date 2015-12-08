function max(x, y) {
    if (x > y) {
        return x;

    } else {
        return y;
    }
}
    var result = max(2, 5);
    console.log(result);

function namesParser(array) {
  /* var result = array[0].charAt(0);
    return result+= array[1].charAt(0);
    return result+= array[2].charAt(0);
    return result+= array[3].charAt(0);
    
    return result;*/
var result = "";
var index = 0;

while (index < 4) {
      result += array[index].charAt(0);
    index += 1;
    
}
return result;
var nameList = ["Iva", "Eli", "Adi", "Leo"]; //"IEAL"
console.log("The parsed result is:" +namesParser(nameList));
