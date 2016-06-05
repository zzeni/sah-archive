$(document).ready(function () {
  "use strict";
  
  function kids(name, age, game, imgUrl, color, food) {
    this.name = name;
    this.age = age;
    this.game = game;
    this.imgUrl = imgUrl;
    this.color = color;
    this.food = food;
  }
  
  kids.prototype.toHTML = function () {
    var asStr = '<div class="col-sm-4 col-lg-4 col-md-4">'  +
            '<div class="thumbnail">'  +
              '<img src="' + this.imgUrl + '" alt="">'  +
              '<div class="caption">'  +
                '<h4 class="pull-right">$' + this.age + '</h4>'  +
                '<h4><a href="#">' + this.name + '</a></h4>'  +
                '<p>' + this.game + '</p>'  +
              '</div>'  +
              '<div class="colors">'  +
                '<p class="pull-right">15 reviews</p>'  +
                '<p>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                  '<span class="glyphicon glyphicon-star"></span>'  +
                '</p>'  +
              '</div>'  +
            '</div>'  +
          '</div>';

    return asStr;
  };
  
  var kidsDB = [];
  
  $.getJSON('js/kids.json', function (data) {
    console.log("success");
    
    data.forEach(function (obj) {
      var kids = new kids(obj.name, obj.age, obj.game, obj.url, obj.color, obj.food);
      kidsDB.push(kids);
    });
    
    printkids(kidsDB);
  }); 

  $('.foodFilter').click(function (event) {
    var filter = $(event.target).attr('data-filter');
    var filtered = kidsDB.filter(function (kids) {
      return filter === 'All' || kids.food === filter;
    });
    
    printkids(filtered);
  });
  
  function printkids(kids) {
    var dbContainer = $("#products");
    dbContainer.empty();
    
    kids.forEach(function (kids) {
      dbContainer.append(kids.toHTML());
    });
  }
  
 });