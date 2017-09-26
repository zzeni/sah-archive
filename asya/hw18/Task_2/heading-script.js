(function () {
    "use strict";

var stop = window.setInterval(function () {
    var newSite = window.location.replace("https://google.bg");
    document.body.appendChild(newSite);
}, 50000);

})();