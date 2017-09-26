"use strict";

function Hero(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
}

Hero.prototype.kickAss = function (enemy) {
    console.log(this.name + " just kicked " + enemy.name + "'s ass");
};

Hero.prototype.saveWorld = function () {
    console.log("Once again " + this.nickname + " saved the world!");
};

var superman = new Hero("Clark Kent", "Superman");
var roger = new Hero("Roger");
var batman = new Hero("Batman");

function BadGuy(name, knownAs) {
    this.name = name;
    this.knownAs = knownAs || name;
}

var joker = new BadGuy("Joker");
var cruella = new BadGuy("Cruella");

roger.kickAss(cruella);
roger.saveWorld(roger);
batman.kickAss(joker);
batman.saveWorld(batman);
superman.kickAss(joker);
superman.saveWorld(superman);
