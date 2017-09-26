 function power3(x) {
     var result = x * x * x;
     return result;
 }

 power3(6);


 function square(x) {
     var result = x * x;
     return result;
 }

 document.write("square of 10:", square(10));



 function area(a, b, c) {
     var rectangle = a * b;
     var triangle = a * (c - b) / 2;
     var result = rectangle + triangle;
     return result;
 }
 document.write("<p>Area:</p>", area(2, 1, 3));
