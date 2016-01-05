"use strict"



function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function focusFunction(x) {
    x.style.background = "yellow";
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
};