"use strict";
var btn=document.getElementsByClassName('stop')[0];
var text=document.getElementsByClassName('newP')[0];
var makeNewText=setInterval(function () {
    text.innerHTML += ('<p>Do you know how to stop me?</p>');
},2000);

btn.addEventListener('click',function () {
    clearInterval(makeNewText);
});