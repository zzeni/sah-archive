$(document).ready(function () {
  "use strict";
  
function Kid(name, age, color, game, food, pic){
    this.name = name;
    this.age = age;
    this.color = color;
    this.game = game;
    this.food = food;
    this.pic = pic;
}
  Kid.prototype.toHTML = function () {
    var asStr = '<div class="col-sm-4 col-lg-4 col-md-4 kid">'  +
            '<div class="thumbnail">'  +
              '<img src="' + this.pic + '" alt="">'  +
              '<div class="caption">'  +
                '<h4 class="pull-right">' + this.name + '</h4>'  +
                '<h4><a href="#">' + 'Maraba pichove az sum na ' + this.age + '</a></h4>'  +
                 '<div class="col-sm-8">'+
                '<ul>'+ 
                '<li><h5>Години:'+ this.age+ '</h5></li>' +
               '<li><h5>Любим цвят: '+this.color + '</h5></li>' + 
                '<li><h5>Любима игра: ' +  this.game +'</h5></li>' +
               ' <li><h5>Лъбима храна: ' +this.food +'</h5></li>' +
             '</ul>'+
          '  </div>'
          '</div>';

    return asStr;
  };
  
  var kidsDB = [];
  
  $.getJSON('js/kids.json', function (data) {
    console.log("success");
    
    data.forEach(function (obj) {
      var kid = new Kid(obj.name, obj.age, obj.color, obj.game, obj.food, obj.pic);
      kidsDB.push(kid);
    });
    
    printKids(kidsDB);
  }); 

 $('.catFilter').click(function (event) {
    var filter = $(event.target).attr('data-filter');
    var filtered = kidsDB.filter(function (kid) {
      return filter === 'All' || kid.age === filter;
    });
    
    printKids(filtered);
  });
  
  function printKids(kids) {
    var dbContainer = $(".container");
    dbContainer.empty();
    
    kids.forEach(function (kid) {
  dbContainer.append(kid.toHTML());
    });
  }
  
 });