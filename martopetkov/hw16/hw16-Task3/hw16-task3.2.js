"use strict";

//function insertText () {
//    document.getElementById('changeText').innerHTML = "Some text to enter";
//    }
//insertText();
var addText = 0;

clearInterval(addText)

var addText = setInterval(function() {
    
    $("#changeText").clone().appendTo(".col-sm-8");
}, 2000);