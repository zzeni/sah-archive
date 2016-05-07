function any(list, value) {
      if (list.indexOf(value) > -1) {
        return true;
      } else {
        return false;
      }
}


function all(list, value) {
    var counter = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
            counter++;
        }else {
            return false;
        }
    } 
    
    if ((counter === list.length) && (list.length !== 0)){
         return true;
    } else {
         return false;
    }
    
}


function callback(list, value) {
    var counter = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
            counter++;
        }
    } 
    
    if  ((counter === list.length) && (list.length !== 0)) {
         return 2;
         
    } else if ((counter > 0) && (list.length !== 0)){
         return 1;
    } else {
         return 0;
    }
}


function hofAny(callback, array) {

for (var i = 0; i < array.length; i++) {
if (callback(array, array[i]) === 1) {
    return true;
 } else if (callback(array, array[i]) === 0){
    return false;
 } else {
    return false;
 }
   }
}


function hofAll(callback, array) {
   for (var i = 0; i < array.length; i++) {
    if (callback(array, array[i]) === 2) {
      return true;
    } else if (callback(array, array[i]) === 0){
      return false;
   } else {
      return false;
  }
    }
}