(function () {
    /*global window,document*/
    //    "use strict";
    var panelIn = document.querySelector(".panel-body");
    var counter = 0;
    window.setInterval(function () {
        panelIn.innerHTML = 50 - counter;
        counter += 1;
    }, 1000);
    window.setTimeout(function () {
        window.location = "https://google.com";
    }, 50000);
    var angle = 1;
    var rotateImage = document.querySelector("img");
    var rotate = function () {
        var degs = angle * 90 + "deg";
        rotateImage.style.transform = "rotate(" + degs + ")";
        angle += 1;
    };
    var rotation = window.setInterval(rotate, 2000);
    window.setTimeout(function () {
        window.clearInterval(rotation);
    }, 10000);
})();
