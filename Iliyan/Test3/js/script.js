$(document).ready(function () {
  "use strict";
  
  function kids (name, age, color, game, food, imgUrl) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.game = game;
    this.food = food;
    this.imgUrl = imgUrl;
  }
  
  Kid.prototype.toHTML = function () {
   var asStr = 
      '<div class="kid">' +
        '<div class="panel panel-info">' +
         '<div class="panel-heading">' +
          '<h3>' + this.name + '</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            '<div class="col-sm-4">' +
              '<img class="img-responsive" src="img/' + this.imgUrl + '">' +
            '</div>' +
            '<div class="col-sm-8">' +
              '<ul>' +
                '<li><h5>$' + this.age + '</h5></li>' +
                '<li><h5>' + this.color + '</h5></li>' +
                '<li><h5>' + this.game + '</h5></li>' +
                '<li><h5>' + this.food + '</h5></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' ;
      '</div>' +

    return asStr;
  };
  
  var kids = [];
  
  $.getJSON('js/kids.json', function (data) {
    console.log("data");
    

  }
  
 });