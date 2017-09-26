setTimeout(function () {
    document.querySelector("#hideMe").style.display = "none";
    document.querySelector("#showMe").style.display = "block";
    document.querySelector("#hostname").innerHTML = location.hostname;
    document.querySelectorAll("div")[2].style.display = "block";
    setInterval(function () {
        document.querySelector("#triggerMe").style.display = "block";
        setTimeout(function () {
            document.querySelector("#triggerMe").style.display = "none";
        }, 5000);
    }, 10000);
}, 30000);