function area(a,b,c) {
var result = a*b + a*(c-b)/2;
return result;
}
console.log("Лицето на триъгълника е " + area(10,6,10));
console.log("Лицето на триъгълника е " + area(2,1,3));
console.log("Лицето на триъгълника е " + area(2,2,3));
document.write("<p>Лицето на четириъгълника е: ", area(10,6,10), "</p>");
document.write("<p>Лицето на четириъгълника е: ", area(2,1,3), "</p>");
document.write("<p>Лицето на четириъгълника е: ", area(2,2,3), "</p>");