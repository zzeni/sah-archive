var array = [
       { name: 'David Bowie', age: 69 },
       { name: 'Thom Yorke', age: 47 },
       { name: 'Matt Berninger', age: 45 },
       { name: 'Tracy Chapman', age: 52 },
       { name: 'Jim Morrison', age: 27 },
       { name: 'Nick Cave', age: 58 }
     ];

var david = { name: 'David Bowie', age: 69 };

function any(list, value) {
  // returns true if at least one value of the array is equal to the passed argument value.

  var listLength = list.length;

  for (var i = 0; i < listLength; i++) {

    var listObjectProps = Object.getOwnPropertyNames(array[i]);
    var objectProps = Object.getOwnPropertyNames(value);

    if (listObjectProps.length !== objectProps.length) {
      return false;
    }

    for (var j = 0; j < array[i].length; j++) {
      var propName = listObjectProps[j];

      if (array[i][propName] !== value[propName]) {
        return false;
      }
    };
  };

  return true;
}

console.log(any(array, david));
