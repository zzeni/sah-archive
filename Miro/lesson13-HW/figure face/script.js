function area(a, b, c) {
    
    var triangle = a*(c-b)/2;
    var square = a*b;
    var result = triangle + square;
   
    document.getElementById("miro").innerHTML = "The result is: " +result;
}
