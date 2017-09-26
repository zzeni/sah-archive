var counter = 49;
var rotationDegrees = 90;
setInterval(function () {
    document.querySelector("#timer").innerHTML = counter-- + " seconds";
    if (0 == counter) {
        window.location = "http://www.cats.org.uk/";
    }
    if (39 <= counter && counter % 2 == 0) {
        document.querySelector("#image").style.transform = "rotate(" + rotationDegrees + "deg)"
        if (240 == rotationDegrees) {
            rotationDegrees = 0;
        } else {
            rotationDegrees += 90;
        }
    }
},1000)