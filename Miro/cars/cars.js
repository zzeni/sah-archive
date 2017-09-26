
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

function describe(cars){
	var result;
	if (cars.color==="red"){
	result = (cars.color +":"+ cars.brand );
	}
	else{
	result = (cars.color +":"+ cars.brand );
	}
	return result;
}
	
describe(cars[3])
