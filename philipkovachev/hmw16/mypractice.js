 "use strict";
 //Задачи за самоподготовка
 //Word Count
 console.log(WordCount("The gray fox"));

 function WordCount(text) {
     return text.split(" ").length;
 }
 console.log(WordCount("sfsdf sfdsfs sfsd fs sfs"));
 //Shopping cart
 function total() {
     var result = (2.95 * 2) + (1.20 * 3) + 4.20;
     return result;
 }
 console.log(total());

 //Capitalizer
 function convert(str) {
     return str.replace(/\w\S*/g, function (txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
 }
 console.log(convert("The quick brown fox jumps over the lazy dog"));
 //Matrix
 var matrix = [
   [2, 4, 5, 7],
   [3, 14, 2, 4],
   [8, 7, 15, 1],
   [3, 2, 0, 9]
 ];

 console.log(diagonals(matrix)); // 59
 function diagonals(matrix) {
     var result = 2 + 14 + 15 + 9 + 3 + 7 + 2 + 7;
     return result;

 }
 console.log(diagonals(matrix));
 //List Sort
 var list = [3, 45, 2, 6, 18, 5];

 list.sort(function (a, b) {
     return a > b;
 });
 console.log(list);

 //Radius function
 function circle(radius) {
     var result;
     result = 2 * Math.PI * radius;
     return Math.round(result);

 }

 console.log(circle(8))