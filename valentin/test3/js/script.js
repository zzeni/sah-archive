$(document).ready(function () {
  "use strict";
  
  function Kid(name, age,picName, color, game, food) {
    this.name = name;
    this.age = age;
    this.picName = picName;
    this.color = color;
    this.game = game;
    this.food = food;
  }
  
  Kid.prototype.toHTML = function () {
    var asStr =  '<div class="kid">'+
        '<div class="panel panel-info">'+
          '<div class="panel-heading">'+
            '<h3>' + this.name +'</h3>'+
          '</div>'+
          '<div class="panel-body">'+
            '<div class="col-sm-4">'+
              '<img class="img-responsive" src="img/' + this.picName + '">' +
            '</div>'+
           '<div class="col-sm-8">'+
              '<ul>'+
              '<li><h5>Години:' + this.age + '</h5></li>'+
               ' <li><h5>Любим цвят: ' + this.color + '</h5></li>'+
               '<li><h5>Любима игра: ' + this.game + '</h5></li>' +
               '<li><h5>Лъбима храна:' +  this.food + '</h5></li>'+ 
             '</ul>'+
           '</div>'+ 
         '</div>'+ 
       '</div>'+ 
     '</div>';

    return asStr;
  };
    
      
  
  var kidDB = [];
    console.log(kidDB);

  $.getJSON('js/kids.json', function (data) {
    console.log("success");
    
    data.forEach(function (obj) {
      var kid = new Kid(obj.name, obj.age, obj.picName, obj.color, obj.game, obj.food);
      kidDB.push(kid);
    });
      
    printBkids(kidDB);

  }); 


  function printBkids(bikes) {
    var dbContainer = $(".container");
    dbContainer.empty();
    
    bikes.forEach(function (kid) {
      dbContainer.append(kid.toHTML());
    });
  }
  
 });