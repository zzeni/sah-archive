$(document).ready(function () {
    //start randomize
    $.fn.randomize = function (selector) {
        var $elems = selector ? $(this).find(selector) : $(this).children(),
            $parents = $elems.parent();

        $parents.each(function () {
            $(this).children(selector).sort(function () {
                return Math.round(Math.random()) - 0.5;
            }).detach().appendTo(this);
        });

        return this;
    };
    //end of randomize

    Cookies.json = true;
    var correct = 0;
    var wrong = 0;
    var animals;
    var currentSlide = 1;
    var scores = Cookies.get("scores") || [];
    var allAnimals;
    var notStart = $("button").not("#start");
    notStart.prop("disabled", true);
    var testWrongScore = [];

    //chech if there is a cookie with results
    if (scores === undefined) {
        $("#max-score").html(scores.name);
    } else {
        $("#previous-results").html("You don't have saved results.");
    };


    //generate all images in the slider
    $.getJSON("data.json", function (data) {
        animals = data;

        animals.forEach(function (singlePost) {
            $("#slider ul").randomize();
            allAnimals = animals.length;
            var postsContainer = $("<li></li>");
            var image = $("<img>").appendTo(postsContainer);
            var category = singlePost.category;

            image.attr("src", singlePost.url);
            image.attr("data-category", category);

            $("#posts").append(postsContainer);
        });

        //hide the slider
        $("#slider").css("display", "none");


        //when the categories are clicked
        notStart.click(function () {
            var image = $("ul li img");
            var currentImage = image[1];
            var currentCategory = $(currentImage).attr("data-category");
            var animalsLeft = slideCount - currentSlide;
            //correct answer
            if (this.id === currentCategory) {
                currentSlide += 1;
                correct += 1;
                $("#correct").html("Correct answers: " + correct); //+ " " + this.id);
                $("#animals-passed").html(currentSlide - 1);
                $("#animals-left").html(animalsLeft);
                moveRight();
            } //wrong answer
            else {
                //working - add wrong answers in an array
                //                testWrongScore.push({
                //                    url: currentImage.src,
                //                    category: currentCategory,
                //                    wrongAnswer: this.id
                //                });
                currentSlide += 1;
                wrong += 1;
                $("#wrong").html("Wrong answers: " + wrong); //+ " " + this.id);
                $("#animals-passed").html(currentSlide - 1);
                $("#animals-left").html(animalsLeft);
                //add wrong results to the results list
                var buttonName = $(this).text();
                var wrongContainer = $("<li></li>").text("Your answer - " + buttonName + " " + "Correct answer - " + currentCategory);
                wrongContainer.appendTo("#wrong-answers");
                var wrongImage = $("<img src='url'>").appendTo(wrongContainer);
                wrongImage.attr("src", currentImage.src);
                //end of resluts list
                moveRight();
            }
            //Game over - hide slider and disable buttons
            if ((slideCount + 1) === currentSlide) {
                $("#slider").css("display", "none");
                notStart.prop("disabled", true);
                notStart.css("display", "none");
                $("#correct").html("Total correct answers: " + correct);
                $("#wrong").html("Total wrong answers: " + wrong);
                $("#results").css("display", "block");
                if (correct > 0) addScore(correct);
            };
        });

        var slideCount = $('#slider ul li').length;
        $("#animals-left").html(slideCount);
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        $("#slider ul li img").css({
            width: slideWidth,
            height: slideHeight
        });

        $('#slider').css({
            width: slideWidth,
            height: slideHeight
        });
        $('#slider ul').css({
            width: sliderUlWidth,
            marginLeft: -slideWidth
        });

        function moveRight() {
            $('#slider ul').animate({
                left: +slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        $('#start').click(function () {
            $("#slider").css("display", "block");
            notStart.prop("disabled", false);
            $(".instructions").css("display", "none");
        });


        function addScore(correct) {
            var name = prompt("Save your score! Enter your name:");
            scores.push({
                name: name,
                score: correct
            });
            // TODO: Here order scores and splice to 10 (before setting the cookie)
            //scores.sort();
            console.log(scores);
            Cookies.set('scores', scores);
        }
        //show max possible result in results page
        $("#max-score").html(allAnimals);




    });
});