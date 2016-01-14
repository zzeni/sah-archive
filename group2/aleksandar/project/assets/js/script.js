(function ($) {
	"use strict";
	var mainApp = {

			main_fun: function () {

				$('a[href*=#]').click(function () {
					if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
						var $target = $(this.hash);
						$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
						if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body')
								.animate({
									scrollTop: targetOffset
								}, 1000); //scroll speed
							return false;
						}
					}
				});
				/*====================================
				Vega slideshow
				======================================*/
				$(function () {
					$.vegas('slideshow', {
							backgrounds: [
								{
									src: 'assets/img/NetflixandChill.jpg',
									fade: 1000,
									delay: 9000
								},
								{
									src: 'assets/img/fmn.jpg',
									fade: 1000,
									delay: 9000
								},
                    ]
						})
						('overlay', {
							src: 'assets/plugins/vegas/overlays/02.png'
						});

				});

				var navOffset = $('nav').offset().top;

				$(window).bind('scroll', function () {;
					
					if ($(window).scrollTop() > navOffset) {
						$('nav').addClass('fixed');
					} else {
						$('nav').removeClass('fixed');
					}
					
				});



			},

			initialization: function () {
				mainApp.main_fun();

			}

		}
		// Initializing ///

	$(document).ready(function () {
		mainApp.main_fun();
	});

}(jQuery));