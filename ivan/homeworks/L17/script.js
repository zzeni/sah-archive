/* TASK:
Countdown страница
Направете страница, която се refresh-ва след 10 секунди, а на екрана има брояч, който отброява от 10 до 0 на всяка секунда.
Сложете бутони pause, resume и reset, които съответно да спират отброяването, да го пускат и да рестартират брояча на 10 сек.
Ако броячът стигне до нула, страницата трябва да redirect-ва към някоя друга страница.
Приятна работа!
*/

window.onload = function () { // I need the picture to be loaded too.

    (function () {
        'use strict';

        /*
        countingInterval - This is the main interval that calls the decrease function every second until the counterIndex reaches zero.
        resumeButton - resumes the interval timer if paused.
        pauseButton - pauses the interval timer if the timer is running (clears the interval).
        resetButton - resets the value of the countdown span back to 10, but it doesn't stop the timer.
        running - boolean flag; true - if the the interval timer is running / false - if it is not
        */

        var countingInterval = setInterval(function () {
            decrease();
        }, 1000);
        var resumeButton = document.getElementById("resume");
        var pauseButton = document.getElementById("pause");
        var resetButton = document.getElementById("reset");
        var running = true;

        function clear() {
            /* Clears the interval named countingInterval*/

            clearInterval(countingInterval);
        }

        function changeLocation() {
            /*Changes the location of the page when the timer reaches zero (i.e. the countdown value reaches zero)*/

            window.location.href = "https://www.google.bg/";
        }

        function liftOff() {
            /* 
               Switches the rocket sprite and adds a new class name to the img holder.
               By adding the new class we are starting the CSS animation associated with this class.	
            */

            var rocket_bay = document.getElementById("rocket_bay");

            rocket_bay.className += " liftingOffNow";
            rocket_bay.style.backgroundPosition = "299px 0px";

        }

        function decrease() {
            /*
            	This function is called every second by the countingInterval.
            	It gets the text from the countdown span and after converting it to int, it decreases it.
            	If the countdown value is equal to 0, the interval is cleared and the href of the page is changed. 
            */

            var counterIndex = +document.getElementById("countdown").innerText; // converting it to int

            if (counterIndex > 0) {

                counterIndex -= 1;

                document.getElementById("countdown").innerText = counterIndex;

                if (counterIndex === 1) { // Additional change to the text. If the remaining time is 1 second, remove the 's' from seconds.
                    document.getElementById("multi").innerText = "";
                }
            }
            if (counterIndex === 0) { // If zero is reached
                clear(); // Clears the current interval
                liftOff(); // Call to liftOff function to disable the buttons and to start the animation
                setTimeout(changeLocation, 2300); // I am using a timeout to change the location after the animation is finished.
            }
        }

        /////////////////////////// Handlers ///////////////////////////////

        function resumeHandler() {
            /*Checks if the interval is NOT running. If not, it starts it with the current value for the counterIndex and sets the flag to true.*/

            if (running === false) {
                running = true;
                countingInterval = setInterval(function () {
                    decrease();
                }, 1000);
            }
        }

        function pauseHandler() {
            /*If the timer is running, it sets the flag to false and clears the interval.*/

            if (running === true) {
                running = false;
                clear();
            }
        }

        function resetHandler() {
            /*
                Sets the text of the countdown span back to its original value of 10. This sets the value of counterIndex to 10.
                Adds the 's' back to seconds, as we again have 10 seconds.
            */

            document.getElementById("countdown").innerText = 10;
            document.getElementById("multi").innerText = "s";
        }

        /*Attaching the event listeners to the 3 buttons.*/
        resumeButton.addEventListener("click", resumeHandler);
        pauseButton.addEventListener("click", pauseHandler);
        resetButton.addEventListener("click", resetHandler);

    }());
};
