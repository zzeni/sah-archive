/*globals document, window, $ */
(function () {
  "use strict";

  var films = [];

    var TEMPLATE = "" +
        "  <article id=\"%FILM-ID-1%\" class=\"film-item\">\n" +
        "    <div class=\"col-xs-4 film-poster\">\n" +
        "      <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
        "      <img src=\"%IMAGE-URL%\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
        "      </a>\n" +
        "    </div>\n" +
        "    <div class=\"col-xs-8 film-info\">\n" +
        "      <h3>\n" +
        "        <a href=\"#\">%FILM-TITLE%</a>\n" +
        "      </h3>\n" +
        "      <div class=\"year-genre\">\n" +
        "        <div>\n" +
        "          <i class=\"fa fa-calendar\"></i>\n" +
        "          <span class=\"year\">%YEAR%</span>\n" +
        "        </div>\n" +
        "        <div class=\"genre elipsis\">\n" +
        "          %GENRE%\n" +
        "        </div>\n" +
        "      </div>\n" +
        "      <div class=\"description\">\n" +
        "        <p>%DESCRIPTION%</p>\n" +
        "        <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
        "      </div>\n" +
        "      <div class=\"rating\">\n" +
        "        <span class=\"rating-value\">%RATING%</span>\n" +
        "        <i class=\"fa fa-star\"></i>\n" +
        "      </div>\n" +
        "    </div>\n" +
        "  </article>\n";

  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  $.getJSON("./db/movies.json", function (data) {
    films = data;
    displayFilms(films);
  });
    
    //Sort the films by year
    
    document.filtersForm.year.addEventListener("change", function (event) {
        var year = event.target.value;
        if (!year) {
            displayFilms(films);
        }
        else {
            var newList = films.filter(function(film) {
                return film.release_date.indexOf(year) > -1;
            });
            displayFilms(newList);
        }
    });

    //Create a function that can compare options from a drop-down menu
    
    function compare(prop) {
        return function (a, b) {
            if (a[prop]< b[prop]){
                return -1;
            }
            else if (a[prop]> b[prop]){
                return 1;
            }
            
            else {
                return 0;
            }
        };
    }
    
    //Use the compare function to Sort the films to compare different options
    
    document.filtersForm.sortBy.addEventListener("change", function () {
        var selected = this.options[this.selectedIndex].text;
        if (selected === "Title descending") {
            films.sort(compare('title'));
        } else if (selected === "Title ascending") {
            films.sort(compare('title'));
            films.reverse();
        } else if (selected === "Release date descending") {
            films.sort(compare('release_date'));
        } else if (selected === "Release date ascending") {
            films.sort(compare('release_date'));
            films.reverse();
        } else if (selected === "Rating ascending") {
            films.sort(compare('vote_average'));
            films.reverse();
        } else if (selected === "Rating descending") {
            films.sort(compare('vote_average'));
        }
        $("#collection").empty();
        displayFilms(films);
    });
    
    //Sort by genre
    document.filtersForm.sortBygenre.addEventListener("change", function () {

        var genre = this.value.toLocaleLowerCase();

        if (!genre) {
            displayFilms(films);
        }
        else {
            var filteredFilms = films.filter(function(film) {
                return film.genres.toLocaleLowerCase().indexOf(genre) > -1;
            });
            displayFilms(filteredFilms);
        }
    });
    
    //Search by keywords
    
    document.filtersForm.keywords.addEventListener("keyup", function (keyword) {
        var value = keyword.target.value.toLocaleLowerCase();
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
    
    //Display films 
    
  function displayFilms(list) {
    var collection = document.querySelector("#collection");
      collection.innerHTML = "";

    list.forEach(function (film) {
      var html = TEMPLATE
        .replace("%YEAR%", film.release_date)
        .replace("%DESCRIPTION%", film.overview)
        .replace(/%FILM-TITLE%/g, film.title)
        .replace("%IMAGE-URL%", film.poster_path)
        .replace("%RATING%", film.vote_average)
        .replace(/%FILM-ID%/g, film.id)
        .replace("%GENRE%", film.genres);
      var div = document.createElement("div");
      div.className = "col-md-6";
      div.innerHTML = html;
      collection.appendChild(div);
    });
  }

})();
