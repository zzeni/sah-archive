document.querySelector("#first").style.backgroundColor = "yellow";
document.querySelector(".middle").style.backgroundColor = "red";
document.querySelector("div:last-of-type").style.backgroundColor = "green";
document.querySelector(".middle").innerHTML =  "<p> <strong>Middle:</strong> uorum do quamquam et noster nam laborum ad fugiat. Ea tamen dui velit arbitror a cupidatat fore varias ea nisi. Ab ubi cohaerescant te quis concursionibus</p>";
var firstd = document.querySelector("div:last-of-type").innerHTML;
var lastd = document.querySelector("#first").innerHTML;
document.querySelector("#first").innerHTML = firstd;
document.querySelector("div:last-of-type").innerHTML = lastd;



window.setTimeout(after30seconds, 30000);

function after30seconds()
{
  document.getElementById("hideMe").classList.add("hidden");
  document.getElementById("showMe").classList.remove("hidden");
  };
window.setInterval(triggerImg, 5000);
function triggerImg()
{
   document.getElementById("triggerMe").classList.toggle("hidden");
};

var host =window.location;
document.getElementById("hostname").classList.remove("hidden");
document.querySelector("div:last-of-type").innerHTML = host;
--------------------------------------------------------------------------------------------------------

window.setTimeout(after30seconds, 30000);

function after30seconds()
{
  document.getElementById("hideMe").classList.add("hidden");
  document.getElementById("showMe").classList.remove("hidden");
  };
window.setInterval(triggerImg, 5000);
function triggerImg()
{
   document.getElementById("triggerMe").classList.toggle("hidden");
};

document.querySelector("div:last-of-type").classList.remove("hidden");
document.getElemetById("hostname").innerHTML =  window.location;