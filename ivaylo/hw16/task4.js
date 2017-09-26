"use strict";

function Hero(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
}

Hero.prototype.kickAss = function (enemy) {
    console.log(this.name +" just kicked " + enemy.name + "'s ass");
};

Hero.prototype.saveWorld = function () {
    // actions to save the world
    console.log("Once again " + this.nickname + " saved the world!");
};

var superman = new Hero("Clark Kent", "Superman");
var chuck = new Hero("Chuck Norris");
var batman = new Hero("Batman");

function BadGuy(name, knownAs) {
    this.name = name;
    this.knownAs = knownAs || name;
}

var joker = new BadGuy("Joker");
var drEvil = new BadGuy("Dr.Evil");

chuck.kickAss(drEvil);
batman.kickAss(joker);
superman.kickAss(joker);
