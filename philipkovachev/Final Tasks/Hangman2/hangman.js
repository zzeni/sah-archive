window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;
    var chosenCategory;
    var word;
    var guess;
    var geusses = [];
    var lives;
    var counter;
    var space;

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");





    var buttons = function () {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }



    var selectCat = function () {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "The Chosen Category Is Basic Front End termynology";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "The Chosen Category Is Basic JavaScript Knowledge";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "The Chosen Category is JavaScript OOP";
        } else if (chosenCategory === categories[3]) {
            catagoryName.innerHTML = "The Chosen Category Is Basic HTML Knowledge";
        } else if (chosenCategory === categories[4]) {
            catagoryName.innerHTML = "The Chosen Category Is Basic CSS Knowledge";
        }

    }


    result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }


    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
            var playme = document.getElementById('playme');
            playme.src = 'music/$500000%20Lose%20-%20Who%20Wants%20to%20Be%20a%20Millionaire.mp3';
            playme.load();
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
                var playme = document.getElementById('playme');
                playme.src = 'music/$1,000,000%20Win%20-%20Who%20Wants%20to%20Be%20a%20Millionaire-.mp3';
                playme.load();


            }
        }
    }





    reset = function () {

        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function () {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    }

    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }




    check = function () {
        list.onclick = function () {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }



    play = function () {
        categories = [
        ["responsive", "layout", "dom", "framework", "validation", "client", "bom", "http", "ajax", "cookies"],
        ["scope", "functions", "variable", "array", "loops", "string", "boolean", "comparison operators", "console log", "modulus", "namespace", "for-loop"],
        ["namespace", "class", "object", "property", "constructor", "inheritance", "encapsulation", "polymorphism", "encapsulation", "abstraction", "method"],
        ["attribute", "tags", "anchor", "element", "input"],
        ["cascading", "stylesheet", "class", "property", "id", "pseudo-element", "flexbox", "pseudo-class", "margin", "padding"]
    ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        reset();
    }

    play();





}