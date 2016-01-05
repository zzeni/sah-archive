"use strict";

$(window).on("load", function () {
	$("div.menu").firstChild.show();
});

$(".nav").on("click", function () {
	$("div.menu").fadeOut(300);
	var targetDiv = $("div.menu").attr("rel");
	$("#" + targetDiv).fadeIn(300);
});









$("#twitter").on("click", function () {
	alert("Жени, моля не ми намалявай оценката заради неработещия линк. Нямат акаунт в twitter, но пък бутончето е толкова симпатично, че реших да си го запазя :)");
});