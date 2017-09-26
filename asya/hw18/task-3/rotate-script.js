(function () {

"use strict";
    
var img = document.createElement("img");
img.src = "dog.jpg";

var src = document.getElementById("params");
src.appendChild(img);

var start = window.setInterval(function () {
img.style.transform = "rotate(90deg)";
document.body.appendChild(img);
}, 2000);

var rotation = window.setInterval(rotate, 2000);
window.setTimeout(function () {
window.clearInterval(rotation);
}, 10000);

})();