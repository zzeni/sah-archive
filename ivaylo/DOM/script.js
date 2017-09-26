/*global window,document*/

(function () {
    "use strict"
    
    window.setTimeout(after30seconds, 30000);

    function after30seconds() {
        document.getElementById("hideMe").classList.add("hidden");


        document.getElementById("showMe").classList.remove("hidden");

    }

    window.setInterval(function () {

        document.getElementById("triggerMe").classList.toggle("hidden");


    }, 5000);


    document.querySelector("div:last-of-type").classList.remove("hidden");
    document.getElementById("hostname").innerHTML = window.location.hostname;
    
})();
