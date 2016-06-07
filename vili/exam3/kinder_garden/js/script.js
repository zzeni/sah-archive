$(document).ready(function () {
	'use strict';

	function Kid(name, image, age, color, game, food) {
		this.name = name;
		this.image = image;
		this.age = age;
		this.color = color;
		this.game = game;
		this.food = food;

	}


	Kid.prototype.toHTML = function () {
		var kit =
			'<div class="kid">' +
			'<div class="panel panel-info">' +
			'<div class="panel-heading">' +
			'<h3>' + this.name + '</h3>' +
			'</div>' +
			'<div class="panel-body">' +
			'<div class="col-sm-4">' +
			'<img class="img-responsive" src="img/' + this.image + '">' +
			'</div>' +
			'<div class="col-sm-8">' +
			'<ul>' +
			'<li><h5> Години: ' + this.age + '</h5></li>' +
			'<li><h5> Цвят: ' + this.color + '</h5></li>' +
			'<li><h5> Игра: ' + this.game + '</h5></li>' +
			'<li><h5> Храна:' + this.food + '</h5></li>' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>';

		return kit;
	};

	var kidDB = [];

	$.getJSON('js/kids.json', function (data) {
		data.forEach(function (obj) {
			var kid = new Kid(obj.name, obj.image, obj.age, obj.color, obj.game, obj.food);
			kidDB.push(kid);
		});

		printKids(kidDB);
	});

	function printKids(kids) {
		var dbContainer = $("#kids");
		dbContainer.empty();

		kids.forEach(function (kid) {
			dbContainer.append(kid.toHTML());
		});
	}
});