var list = [3, 45, 2, 6, 18, 5];
//You cannot use the in-build sort() function for numbers. You need to create your custom function 
function sort(list) {
    var sortedString =list.sort(function(a, b){
        return a-b;
    });
    return sortedString;
}

console.log(sort(list)); // [2, 3, 5, 6, 18, 45]