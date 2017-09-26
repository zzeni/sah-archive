/* global $, document*/

(function () {
  "use strict";

  var kids;

  $.getJSON('js/kids.json', function (data) {
    kids = data;
    display(kids);
  });

  var TEMPLATE = '' +
    ' <div class="kid">' +
    '<div class="panel panel-info">' +
    ' <div class="panel-heading">' +
    '<h3>"%NAME%"</h3>' +
    '</div>' +
    '<div class="panel-body">' +
    '<div class="col-sm-4">' +
    '<img class="img-responsive" src="%IMAGE%">' +
    ' </div>' +
    ' <div class="col-sm-8">' +
    '  <ul>' +
    '<li><h5>Години: "%AGE%"</h5></li>' +
    '<li><h5>Любим цвят: "%COLOR%"</h5></li>' +
    '<li><h5>Любима игра: "%GAME%"</h5></li>' +
    '<li><h5>Любима храна: "%FOOD%"</h5></li>' +
    ' </ul>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';


  function display() {
    $('#kids').empty();
    for (var i = 0; i < kids.length; i++) {
      var kidsHTML = TEMPLATE
        .replace("%NAME%", kids[i].name)
        .replace("%AGE%", kids[i].age)
        .replace("%COLOR%", kids[i].color)
        .replace("%GAME%", kids[i].game)
        .replace("%FOOD%", kids[i].food)
        .replace("%IMAGE%", kids[i].image);
      $('#kids').append(kidsHTML);
    }
  }
  
  function sort(list, property) {
    return list.sort(function (a,b) {
      if (a[property] > b[property]) {
        return 1;
      }
      if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  }

 
  $("#name").on("click", function (event) {
    event.preventDefault();
    var sorted = sort(kids, "name");
    display(sorted);
  });
  $("#age").on("click", function (event) {
    event.preventDefault();
    var sorted = sort(kids, "age");
    display(sorted);
  });

  $("#search").on("keyup", function (event) {
    var value = event.target.value.toLocaleLowerCase();
    if (value.length > 2) {
    var filtered = kids.filter(function (kid) {
      if (value === kid.game) {
        return kid;
      }
      });
      display(filtered);
    }
    else {
      display(kids);
    }
  });
  
})();
