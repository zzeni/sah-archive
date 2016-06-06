'use strict';

var Child = function(name, age, color, game, food) {
      
    this.name = name;
    this.age = age;
    this.color = color;
    this.game = game;
    this.food = food;
    
};
$(document).ready(function () {
  var kid = [];
                  
$.getJSON('js/kids.json', function(data){
    printKids(data);
});

function printKids(kid) {

    });
    console.log(printKids);
}

});
