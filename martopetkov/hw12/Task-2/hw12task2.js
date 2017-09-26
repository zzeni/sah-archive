function circle(radius) {
    var result = 2 * Math.PI * radius

    return Math.round(result);

}


console.log(circle(8)); // => 50


function myFunction() {
    document.getElementById("circleresult").innerHTML = (circle(8));
}


// this is just for fun. YOu get the result when clicking

function myFunction2() {
    document.getElementById("circleresult2").innerHTML = (circle(8));
}

myFunction2();