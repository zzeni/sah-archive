$(document).ready(function () {
  "use strict";
  
  function Kid(name, age, color, game, food, pic) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.game = game;
    this.food = food;
    this.pic = pic;
  }
  
  Kid.prototype.toHTML = function () {
    var asStr = '<div class="kid">' +
                '<div class="panel panel-info">' +
                    '<div class="panel-heading">' +
                        '<h3>' + this.name + '</h3>' +
                    '</div>' +
                    '<div class="panel-body">' +
                       '<div class="col-sm-4">' +
                            '<img class="img-responsive" src="' + this.pic + '">' +
                       '</div>' +
                        '<div class="col-sm-8">' +
                            '<ul>' +
                                '<li>' +
                                    '<h5>' + this.age + '</h5>' + '</li>' +
                                '<li>' +
                                    '<h5>' + this.color + '</h5>' + '</li>' +
                                '<li>' +
                                    '<h5>' + this.game + '</h5>' + '</li>' +
                                '<li>' +
                                   '<h5>' + this.food + '</h5>' + '</li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

    return asStr;
  };
  
  var childrenDB = [];
  
  $.getJSON('js/kids.json', function (data) {
    console.log("success");
    
    data.forEach(function (obj) {
      var kid = new Kid(obj.name, obj.age, obj.color, obj.game, obj.food, obj.pic);
      childrenDB.push(kid);
    });
    
    printKids(childrenDB);
  }); 

 /* $('.catFilter').click(function (event) {
    var filter = $(event.target).attr('data-filter');
    var filtered = bikesDB.filter(function (bike) {
      return filter === 'All' || bike.category === filter;
    });
    
    printBikes(filtered);
  });*/
  
  function printKids(kids) {
    var dbContainer = $("#children");
    dbContainer.empty();
    
    kids.forEach(function (kid) {
      dbContainer.append(kid.toHTML());
    });
  }
  
 });