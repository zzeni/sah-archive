var array = [
  { name: 'David Bowie', age: 69 },
  { name: 'Thom Yorke', age: 47 },
  { name: 'Matt Berninger', age: 45 },
  { name: 'Tracy Chapman', age: 52 },
  { name: 'Jim Morrison', age: 27 },
  { name: 'Nick Cave', age: 58 }
];


var david = { name: 'Nick Cave', age: 58 };

function any(list, value) {
  // returns true if at least one value of the array is equal to the passed argument value.

  var listLength = list.length,
      result = false;

  for (var i = 0; i < listLength; i++) {

    var listObjectProps = Object.getOwnPropertyNames(array[i]),
        objectProps = Object.getOwnPropertyNames(value);

    if (listObjectProps.length !== objectProps.length) {
      result = false;
    }

    for (var j = 0; j < listObjectProps.length; j++) {
      var propName = listObjectProps[j];

      if (array[i][propName] === value[propName]) {
        result = true;
      }
      else {
        result = false;
      }
    }

    if (result === true) {
      return true;
    } else{
      continue;
    }
  }

  return result;
}

console.log("Function any output: " + any(array, david));


function all(list, value) {
  // returns true if at least one value of the array is equal to the passed argument value.

  var listLength = list.length;

  for (var i = 0; i < listLength; i++) {

    var listObjectProps = Object.getOwnPropertyNames(array[i]),
        objectProps = Object.getOwnPropertyNames(value);

    if (listObjectProps.length !== objectProps.length) {
      return false;
    }

    for (var j = 0; j < listObjectProps.length; j++) {
      var propName = listObjectProps[j];

      if (array[i][propName] !== value[propName]) {
        return false;
      }
    };
  };

  return true;
}

console.log("Function all output: " + all(array, david));

function hofAny(callback, array) {
  return callback(array, david);
}
console.log("Function hofAny output: " + hofAny(any, array));


function hofAll(callback, array) {
  return callback(array, david);
}
console.log("Function hofAll output: " + hofAll(all, array));


