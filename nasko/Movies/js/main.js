/*globals document, window, $ */
(function () {
"use strict";
$("body").ready(function () {
$("#container").load("templates/_home.html");
});
$(".navbar-brand").click(function () {
$(".home-link").click();
});
$("li a").on("click", function () {
var containerValue = this.getAttribute("data-info"),
toLoad = "templates/_" + containerValue + ".html";
$("#container").load(toLoad);
});

window.addEventListener("scroll", function () {
if (document.body.scrollTop > 200) {
$("#header nav").addClass("slim");
} else {
$("#header nav").removeClass("slim");
}

});
})();
