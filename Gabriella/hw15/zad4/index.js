function Hero (name, knownAs) {
    this.name = name;
    this.knownAs = knownAs;
}

function BadGuy (knownAs) {
    this.knownAs = knownAs;
}

Hero.prototype.kickAss = function (badGuy) {
    return this.knownAs + " just kicked " + badGuy.knownAs + "'s ass"
};

function kickBadGuysAss() {
    var batman = new Hero("Bruce Wane", "Batman");
    var theJoker = new BadGuy("Joker");
    
    document.write(batman.kickAss(theJoker));
}

kickBadGuysAss();