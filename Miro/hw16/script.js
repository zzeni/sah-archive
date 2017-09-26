'use strict';

(function () {
    setTimeout(function () {
        window.location.href = 'http://www.google.bg'
    }, 3000);
})();

(function write() {
    var button = document.getElementsByClassName('btn')[0];
    var newP = document.getElementsByClassName('place')[0];
    var clear = setInterval(function () {
        newP.innerHTML += ('<p>Do you know how to stop me?</p>');
    }, 2000);
    return clear;

    button.addEventListener('click', function () {
        newP.innerHTML = '';
    });

    function myStop() {
        clearInterval(clear);
    };
})();


var button = document.getElementsByClassName('btn')[0];
var newP = document.getElementsByClassName('place')[0];
var clear = setInterval(function () {
    newP.innerHTML += ('<p>Do you know how to stop me?</p>');
}, 2000);


button.addEventListener('click', function () {
    clearInterval(clear);

});

function myStop() {
    clearInterval(clear);
};