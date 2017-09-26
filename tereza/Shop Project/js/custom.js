/* globals $ */

(function () {
  "use strict";

  var records;

  $.getJSON('js/records.json', function (data) {
    records = data;
    display(records);
  });

  var TEMPLATE = '' +
    '<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">' +
    '<div class="card h-100"><a href="%LINK%">' +
    '<img class="card-img-top img-fluid" data-toggle="modal" data-target=".bs-example-modal-lg" src="%IMG%" alt="">' +
    '<div class="card-block">' +
    '<h4 class="card-title" data-toggle="modal" data-target=".bs-example-modal-lg">%TITLE%</h4>' +
    '<h5 class="card-artist" data-toggle="modal" data-target=".bs-example-modal-lg">%ARTIST% (%YEAR%)</h5>' +
    '<h5>%GENRE% %GRADING%</h5>' +
    '<h5>€%PRICE%</h5>' +
    ' </div>' +
    '<div class="card-footer">' +
    '<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Buy now</button>' +
    '</div>' +
    '</a></div>' +
    '</div>';

  function display() {
    $('#items-list').empty();
    for (var i = 0; i < records.length; i++) {
      var recordsHTML = TEMPLATE
        .replace("%IMG%", records[i].image)
        .replace("%TITLE%", records[i].title)
        .replace("%LINK%", records[i].link)
        .replace("%ARTIST%", records[i].artist)
        .replace("%YEAR%", records[i].year)
        .replace("%GENRE%", records[i].genre)
        .replace("%GRADING%", records[i].grading)
        .replace("%PRICE%", records[i].price);
      $('#items-list').append(recordsHTML);
    }
  }

  $("#about-link").on("click", function () {
    $("#page-content").load("./templates/_about.html");
    $("#filters").remove();
    $("#shopping-bag-icon").remove();
    $(".banner").remove();
  });

  $("#contacts-link").on("click", function () {
    $("#page-content").load("./templates/_contacts.html");
    $("#filters").remove();
    $("#shopping-bag-icon").remove();
    $(".banner").remove();
  });


  function sort(list, property) {
    return list.sort(function (a, b) {
      if (a[property] > b[property]) {
        return 1;
      }
      if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    });
  }


  $("#search").on("keyup", function () {
    $('#items-list').empty();
    var value = this.value.toLowerCase();
    var filtered = records.filter(function (vinyl) {
      return vinyl.genre.toLocaleLowerCase().match(value);
    });

    if (value === " ") {
      display(records);
    } else {
      display(filtered);
    }
  });


  $("#title").on("click", function (event) {
    event.preventDefault();
    var sorted = sort(records, "title");
    display(sorted);
  });
  $("#genre").on("click", function (event) {
    event.preventDefault();
    var sorted = sort(records, "genre");
    display(sorted);
  });
  $("#price").on("click", function (event) {
    event.preventDefault();
    var sorted = sort(records, "price");
    display(sorted);
  });


})();
