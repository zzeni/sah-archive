"use strict";

var cars = [
{
  brand: "citroen",
  color: "grey",
  engine: "2.5"
},
{
  brand: "dacia",
  color: "blue",
  engine: "2.2"
},
{
  brand: "citroen",
  color: "red",
  engine: "2.1"
},
{
  brand: "opel",
  color: "red",
  engine: "1.9"
},
{
  brand: "subaru",
  color: "black",
  engine: "2.4"
},
{
  brand: "ford",
  color: "blue",
  engine: "2.1"
}
];
cars;
//First part
let auto = cars.filter(function (wagen){
  return wagen.color === 'red';
});
console.log(auto);
// End of first part

//Second part
/*    
let auto = cars.filter(function (wagen){
if(wagen.color === 'red' || wagen.color === 'blue') {
return wagen.engine > 2;
}
});
console.log(auto);
*/
//End of second part
