"use strict"

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
        function selectCars(cars){
            var result = [];

            for(var i = 0; i < cars.length; i++){
                var car = cars[i];


                if(car.color == 'red'){
                    result.push(car);

                }

            }

            return result;

        }
        console.log(selectCars(cars));
