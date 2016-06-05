$(document).ready(function () {
    'use strict';

    function Toddler(name, age, color, game, food, image) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.game = game;
        this.food = food;
        this.image = image;
    }


    Toddler.prototype.toHTML = function () {

        var kid = $('<div class="kid">' +
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
            '<li><h5>Години: ' + this.age + '</h5></li>' +
            '<li><h5>Любим цвят: ' + this.color + '</h5></li>' +
            '<li><h5>Любима игра: ' + this.game + '</h5></li>' +
            '<li><h5>Любима храна: ' + this.food + '</h5></li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');


        console.log(this.name);

        return kid;
    };



    $.getJSON('js/kids.json', function (data) {

        var childrenDB = [];

        data.forEach(function (obj) {


            var childObj = new Toddler(obj.name, obj.age, obj.color, obj.game, obj.food, obj.image);
            childrenDB.push(childObj);
        });

        printChildren(childrenDB);
    });



    function printChildren(children) {
        var dbContainer = $("#kids");

        children.forEach(function (child) {
            dbContainer.append(child.toHTML());
        });
    }




});