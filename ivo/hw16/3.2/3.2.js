var myVar;

function myStartFunction() {
    myVar = setInterval(function () {
        alertFunc("text");
    }, 2000);
}

function alertFunc(param1) {
    document.getElementById("demo").innerHTML += "Do you know how to stop me? ";
}

function myStopFunction() {
    clearInterval(myVar);
}