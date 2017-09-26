"use strict";

function extractHash(url) {
	return url.substr(url.lastIndexOf('#'));
}

function renderProject(project) {
	return '<li><a href="#" class="animated flipInX">' + project.name + '<img src="' + project.img + '" alt="img01" /></a></li>';
}

function getAbsoluteDistance(el) {
	return Math.abs($(el).offset().top - $(document).scrollTop());
}

var calm = './images/myImages/my_vector_version.JPG';
var emotions = ['./images/myImages/my_vector_version_two.JPG', './images/myImages/my_vector_version_starwars.JPG', './images/myImages/my_vector_version_open_mouth.JPG'];

var current_emotion_index = Math.floor(Math.random() * emotions.length);

function smileForAwhile(ms) {
	$('#my_img').attr('src', emotions[current_emotion_index]);
	setTimeout(function () {
		$('#my_img').attr('src', calm);
	}, (ms || 1500));
}

function animateScroll(target, ms) {
	var targetOffset = target.offset().top;
	$('body').animate({
		scrollTop: targetOffset
	}, (ms || 1500));
}

//JSON

$(document).ready(function () {
	$.get('projects.json', function (result) {
		result.forEach(function (project) {
			$('#portfolio').append(renderProject(project));
		});
	});

	//SCROLL
	var lastNav = $('#myName');
	$(document).scroll(function (e) {
		var distanceFromScroll = {
			300: '#myName'
		};

		$('.jumbotron').each(function (i, el) {
			distanceFromScroll[getAbsoluteDistance(el)] = '#nav-' + $(el).attr('id');
		});

		lastNav.toggleClass('active');

		lastNav = $(distanceFromScroll[Object.keys(distanceFromScroll)[0]]);
		lastNav.toggleClass('active');

		smileForAwhile(1500);
	});

	$('.nav a, #myName').click(function () {
		current_emotion_index = Math.floor(Math.random() * emotions.length);
		var target = $(extractHash(this.href));
		if (target.length === 1) {
			animateScroll(target);
			return false;
		}
	});
});

// LANGUAGE-SELECTOR

$(document).ready(function () {
	var cookieLanguage = Cookies.get('language');
	if (cookieLanguage && ['en', 'bg'].indexOf(cookieLanguage) > -1) {
		$('html').attr('lang', cookieLanguage);
		$('#langSelect').val(cookieLanguage);
	}

	$('#langSelect').change(function () {
		var lang = $(this).val();
		$('html').attr('lang', lang);
		Cookies.set('language', lang, {
			expires: 7
		});
	});
});

// EMAIL-VALIDATION
$('#form1').validate();

$.validator.methods.email = function (value, element) {
	return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
}