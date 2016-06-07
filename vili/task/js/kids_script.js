$(document).ready(function () {

    function Kids(name, age, color, game, food, imgUrl) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.game = game;
        this.food = food;
        this.imgUrl = imgUrl;
    }

    Kids.prototype.toHTML = function () {
        var kidStr = this.name;
        return kidStr;
    };

    $.getJSON("js/kids.json", function (data) {
        printKids(data);
    });

    function printKids(kids) {
        console.log(kids);
    }



});