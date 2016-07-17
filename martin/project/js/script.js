'use strict';
var questions = {
    question: 'Коя е стoлицата на България?'
    , answers: ['Пловдив', 'Варна', 'Стара Загора', 'София']
    
};

/*function currectAnswer(function(){
    var currect = questions.answers[3];
    var wrongOne = questions.answers[0];
    var wrongTwo = questions.answers[1];
    var wrongTree = questions.answers[2];
    var currentElement = document.getElementById('answer4');
    
    currect = true;
    

});*/

$(document).ready(function(){
    $('#answer4').click(function(){
           $(this).css('background-color', 'green'); 
    });
});



// Click music buttons
/*ion.sound({
    sounds: [
        {
            name: 'magic-effect'
       , }
   ]
    , volume: 0.5
    , path: 'audio/'
    , preload: true
});

$(document).ready(function () {
    $('.main-button').click(function () {
        ion.sound.play('magic-effect');
    });
});


// End click music buttons*/

// Magic cursor

$(document).ready(function () {
    $('body').jstars({
        image_path: 'img/'
        , style: 'blue'
        , frequency: 14
    });
});
// End of Magic cursor


$(document).ready(function () {
    $('#exit-game').click(function () {
        window.close();
    });
});

$(document).ready(function () {
    $('#start-game').click(function () {
        $('#start-game').text('ПРОДЪЛЖИ');
        putQuestion();
        putAnswer1();
        putAnswer2();
        putAnswer3();
        putAnswer4();
    });
});

function putQuestion() {
    var theQuestion = document.getElementById('question');

    theQuestion.innerHTML = questions.question;
}


function putAnswer1() {
    var theAnswer1 = document.getElementById('answer1');

    theAnswer1.innerHTML = questions.answers[0];

}

function putAnswer2() {
    var theAnswer2 = document.getElementById('answer2');

    theAnswer2.innerHTML = questions.answers[1];

}

function putAnswer3() {
    var theAnswer3 = document.getElementById('answer3');

    theAnswer3.innerHTML = questions.answers[2];

}

function putAnswer4() {
    var theAnswer4 = document.getElementById('answer4');

    theAnswer4.innerHTML = questions.answers[3];

}

/* Video options */

document.getElementById('start').addEventListener('click', function () {
    var video = document.getElementById('video-one');

    video.play();
    setInterval(function () {
        $('#skip').text('Започни своето магическо приключение');

    }, 62000);

    clearInterval();

});

$(document).ready(function () {
    $('#skip').click(function () {
        $('#video').hide();
        $('#video-one')[0].pause();

    });
});

function countDown() {
    var i = 120;
    var myinterval = setInterval(function() {
        document.getElementById("timer").innerHTML = i;
        if (i === 0) {
            clearInterval(myinterval );
            $('#time-out').modal('show');
        }
        else {
            i--;
        }
    }, 1000);
}

$(document).ready(function(){
    $('#skip').click(function(){
        countDown();
    });
});

/* JS qustion generate test 

 function Questions(question, answerOne, answerTwo, answerThree, answerFour) {
        this.question = question;
        this.answerOne = answerOne;
        this.answerTwo = answerTwo;
        this.answerThree = answerThree;
        this.anserFour = answerFour;
}

Questions.prototype.toHTML = function () {

        var question = $('<div id="page1" class="ornam-top-left">' +
            '<img src="img/ornament-left-top.png">' +
            '</div>' +
            '<h3 id="question">' + this.question + '</h3>' +
            '<div class="orman-left-bottom">' +
            '<img src="img/ornament-left-bottom.png">' +
            '</div>' +
            '</div>' +
            '<div class="page">' +
            '<div class="ornament-right-bottom">' +
            '<img src="img/ornament-right-bottom.png">' +
            '</div>' +
            '<div>' +
            '<button type="button" class="btn btn-secondary exit-game-btn" data-dismiss="modal">Изход</button>' +
            '<div id="joker-container">' +
            '<button class="joker-btn" type="button"><i class="fa fa-users" aria-hidden="true"></i></button>' +
            '<button class="joker-btn" type="button">50/50</button>' +
            '<button class="joker-btn" type="button">Подсказка</button>' +
            '</div>' +
            '<div>' +
            '<h5>Време :</h5>' +
            '<p><span id="timer">120</span> секунди</p>' +
            '</div>' +
            '<div id="answer-container">' +
            '<button id="answer1" type="submit" class="test-answer">' + this.answerOne + '</button>' +
            '<button id="answer2" type="submit" class="test-answer">' + this.answerTwo + '</button>' +
            '<button id="answer3" type="submit" class="test-answer">' + this.answerThree + '</button>' +
            '<button id="answer4" type="submit" class="test-answer">' + this.anserFour + '</button>' +
            '</div>' +
            '</div>' +
            '<div class="ornament-right-top">' +
            '<img src="img/ornament-right-top.png">' +
            '</div>' +
            '<button id="next-question" class="step-forward">Напред <i class="fa fa-forward" aria-hidden="true"></i></button>' +
            '</div>' +

        return question;
};
                         
$.getJSON('js/questions.json', function(data){
    var questionsDB = [];
            
    data.forEach(function(obj){
        var questionObj = new Questions(obj.question, obj.answerOne, obj.answerTwo, obj.answerThree, obj.anserFour);
        
        questionsDB.push(questionObj);
    });
             printQuestions(questionsDB);

});
    
function printQuestions(function(question){
    var questionsContainer = $('')
}); */


                         












