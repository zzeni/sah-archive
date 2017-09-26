/*globals document, window, $ */
(function () {
  "use strict";

  var films = [];

    var TEMPLATE = "" +
        "        <article id=\"%FILM-ID-2%\" class=\"film-item\">\n" +
        "          <div class=\"col-xs-4 film-poster\">\n" +
        "            <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
        "              <img src=\"%IMAGE-URL%\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
        "            </a>\n" +
        "          </div>\n" +
        "          <div class=\"col-xs-8 film-info\">\n" +
        "            <h3>\n" +
        "              <a href=\"#\">%FILM-TITLE%</a>\n" +
        "            </h3>\n" +
        "            <div class=\"year-genre\">\n" +
        "              <div>\n" +
        "                <i class=\"fa fa-calendar\"></i>\n" +
        "                <span class=\"year\">%YEAR%</span>\n" +
        "              </div>\n" +
        "              <div class=\"genre elipsis\">\n" +
        "                %GENRE%\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <div class=\"description\">\n" +
        "              <p>%DESCRIPTION%</p>\n" +
        "              <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
        "            </div>\n" +
        "            <div class=\"rating\">\n" +
        "              <span class=\"rating-value\">%RATING%</span>\n" +
        "              <i class=\"fa fa-star\"></i>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </article>\n";

 
  $.getJSON("./db/movies.json", function (data) {
    films = data;
      displayFilms(films);
  });

  document.filtersForm.year.addEventListener("change", function () {
    // your code here ...
  });

  function displayFilms(list) {
    var collection = document.querySelector("#collection");

 

    list.forEach(function (film) {
        var html = TEMPLATE
        .replace("YEAR%", film.release_data);
        .replace("IMAGE-URL", film.poster_path);
        var div = document.createElement("div");
        div.className = "col-md-6";
        div.innerHTML = html;
        collection.appendChild(div);
    });
  }

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200) {
        document.querySelector("#header nav").classList.add("slim");
    }
    else {
        document.querySelector("#header nav").classList.remove("slim");
      // your code here
    }
  });
})();
