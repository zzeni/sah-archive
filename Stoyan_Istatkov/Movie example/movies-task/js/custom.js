/*globals document, window, $ */
(function () {
  "use strict";

  var films = [];

  var TEMPLATE =

    "        <article id=\"%FILM-ID-1%\" class=\"film-item\">\n" +
    "          <div class=\"col-xs-4 film-poster\">\n" +
    "            <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
    "              <img src=\"./img/missing.gif\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
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
    "        </article>\n"
     ;



  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  $.getJSON("./db/movies.json", function (data) {
    // your code here ...
        films = data;
        displayFilms(films);
  });

    document.filtersForm.year.addEventListener("change", function () {

      var year = this.value;

      if (!year) {
          displayFilms(films);
      }
      else {
          var filteredFilms = films.filter(function(film) {
              return film.release_date.indexOf(year) > -1;
          });
          displayFilms(filteredFilms);
      }


  });

  document.filtersForm.sortBygenre.addEventListener("change", function () {

    var genre = this.value.toLocaleLowerCase();

    if (genre) {

        var filteredFilms = films.filter(function(film) {
            return film.genres.toLocaleLowerCase().indexOf(genre) > -1;
        });
        displayFilms(filteredFilms);
    }
    else {
        displayFilms(films);
    }
    });


  document.filtersForm.keywords.addEventListener("keyup", function () {
      var value = event.target.value.toLocaleLowerCase();
      if (value.length > 2) {
          var filtered = films.filter(function (film) {
              return (film.original_title +" "+film.overview).toLocaleLowerCase().indexOf(value) > -1;
          });
          displayFilms(filtered);
      }
      else {
          displayFilms(films);
      }
    });


    document.filtersForm.sortBy.addEventListener("change", function () {

        var sortProp = this.value;

        var titleAscending = films.sort(function(a, b)
        {
            if ( a.title > b.title ){
                return 1;
            }
            if( a.title < b.title){
                return -1;
            }
            return 0;
        });

        var yearAscending = films.sort(function(a, b)
        {
            if ( a.release_date.split("-")[0] > b.release_date.split("-")[0] ){
                return 1;
            }
            if( a.release_date.split("-")[0] < b.release_date.split("-")[0]){
                return -1;
            }
            return 0;
        });

        var ratingAscending = films.sort(function(a, b)
        {
            if ( a.vote_average > b.vote_average ){
                return 1;
            }
            if( a.vote_average < b.vote_average){
                return -1;
            }
            return 0;
        });

            if (sortProp === "title-asc") {

                displayFilms(titleAscending);
            }
             else if (sortProp === "title-desc") {

                var titleDescending = titleAscending.reverse();
                displayFilms(titleDescending);
            }

            else if (sortProp === "date-asc") {


                displayFilms(yearAscending);
            }
            else if (sortProp === "date-desc") {

                var yearDescending = yearAscending.reverse();
                displayFilms(yearDescending);
            }
            else if (sortProp === "rating-asc") {

                displayFilms(ratingAscending);
            }
            else if (sortProp === "rating-desc") {

                var ratingDescending = ratingAscending.reverse();
                displayFilms(ratingDescending);
            }
            else {
                displayFilms(films);
            }

    });

  $("#homeLink").on("click", function () {

      $("#collection").load("./_Home.html");
      $("#filters").addClass("hidden");
      $(".pagination").addClass("hidden");
    });

  $("#aboutLink").on("click", function () {

        $("#collection").load("./_About.html");
        $("#filters").addClass("hidden");
        $(".pagination").addClass("hidden");

    });

    $("#collectionLink").on("click", function () {
        displayFilms(films);
    });


  function displayFilms(list) {
    var collection = document.querySelector("#collection");
      collection.innerHTML = "";

    list.forEach(function (film) {

        var movieHTML = TEMPLATE
        .replace(/%FILM-TITLE%/g, film.original_title)
        .replace("%YEAR%", film.release_date)
        .replace("%GENRE%", film.genres)
        .replace("%DESCRIPTION%", film.overview)
        .replace("%RATING%", film.vote_average)
        .replace(/%FILM-ID%/g, film.id)
        .replace("\"./img/missing.gif\"", film.poster_path);



      var div = document.createElement("div");
          div.className = "col-md-6";
          div.innerHTML = movieHTML;
          collection.appendChild(div);

    });
  }

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200) {
      // your code here
        $("header nav").addClass("slim");
    }
    else {
      // your code here
        $("header nav").removeClass("slim");
    }
  });
})();
