$(document).ready(function() {
    "use strict";

    function Kid(name, age, color, game, food, imgUrl) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.game = game;
        this.food = food;
        this.imgUrl = imgUrl;
    }

    Kid.prototype.toHTML = function() {
        var asStr =
            '<div class="kid">' +
            '<div class="panel panel-info">' +
            '<div class="panel-heading">' +
            '<h3> ' + this.name + '</h3>' +
            '</div>' +
            '<div class="panel-body">' +
            '<div class="col-sm-4">' +
            '<img class="img-responsive" src="img/' + this.imgUrl + '">' +
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

        return asStr;
    };

    var childrenDB = [];

    $.getJSON('js/kids.json', function(data) {
        console.log("data");

        data.forEach(function(obj) {
            var kid = new Kid(obj.name, obj.age, obj.color, obj.game, obj.food, obj.imgUrl);
            childrenDB.push(kid);
        });

        printKids(childrenDB);
    });

    function printKids(kids) {
        var dbContainer = $("#children");
        dbContainer.empty();

        kids.forEach(function(kid) {
            dbContainer.append(kid.toHTML());
        });
    }
});