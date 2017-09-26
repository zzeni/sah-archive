(function () {
"use strict"
    window.setTimeout(after30seconds, 30000);

function after30seconds() {
    document.getElementById("hideMe").classList.add("hidden");
    document.getElementById("showMe").classList.remove("hidden");
    var lastDiv = document.querySelector("div:last-of-type");
    lastDiv.classList.remove("hidden");
    lastDiv.innerHTML = lastDiv.innerHTML + document.location.hostname;

    window.setInterval(triggerImg, 5000);
}

function triggerImg() {
    document.getElementById("triggerMe").classList.toggle("hidden"), 5000;
}
})();