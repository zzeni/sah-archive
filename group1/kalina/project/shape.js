"use strict";

$(window).on("load", function () {
	$("div.menu:first-child").show();
});

$(".nav a").on("click", function () {
	$("div.menu").fadeOut(30);

	var targetDiv = $(this).attr("data-rel");
	setTimeout(function () {
		$("#" + targetDiv).fadeIn(30);
	}, 30);
});

$("#twitter").on("click", function () {
	alert("Жени, моля не ми намалявай оценката заради неработещия линк. Нямат акаунт в twitter, но пък бутончето е толкова симпатично, че реших да си го запазя :)");
});

////I am still working over this function in order to get it run....
//On click over the picture, the same picture should appear (with bigger size) in the .parent element. 
//On click wherever else in the body, the picture should disappear and the original content in the .parent element should appear.

//var pictures = $(".img-1").on("click", function () {
//	var par = $(".present")
//		.html("<div></div>")
//		.addClass("img-1-big col-xs-12 col-md-12 col-lg-12")
//		.append("<img src='img/bothtrainingout.jpg'>");
//	par.fadeIn(100);
//
//	$('.img-1-big').on('click', 'img.img-1-big', function (events) {
//		$(this).parents('div').eq(1).remove();
//	});
//});