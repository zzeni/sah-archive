function BadGuy(name, knownAs) {
    this.name = name;
    this.knownAs = knownAs || name;
    this.kickAss = function(enemy) {
        return (enemy.knownAs + " just kicked " + this.knownAs + "'s ass");
    };
    this.img = "url(batman - vs - joker.jpg)";
}

function Hero(name, knownAs) {
    this.name = name;
    this.knownAs = knownAs || name;
}
var batman = new Hero("Bruce Wane", "Batman");
var joker = new BadGuy("Joker");

var twoFace = new BadGuy("Hravey Dent", "Two-face");
console.log(joker.kickAss(batman));
console.log(twoFace.kickAss(batman));