window.setTimeout(after30Seconds, 3000);

function after30Seconds() {
    document.getElementById("hideMe").classList.add("hidden");
    document.getElementById("showMe").classList.remove("hidden");

    window.setInterval(triggerImg, 5000);

    function triggerImg() {
        document.getElementById("triggerMe").classList.toggle("hidden");
    }
    var host = window.location;
    document.querySelector("div:last-of-type").classList.remove("hidden");
    document.getElementById("hostname").innerHTML = host;
}