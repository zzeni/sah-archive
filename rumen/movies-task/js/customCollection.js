/*globals document, window, $ */
(function () {
    "use strict";

    var films = [];

    var TEMPLATE = "<div class=\"col-md-6\">\n" +
        "        <article id=\"%FILM-ID-1%\" class=\"film-item\">\n" +
        "          <div class=\"col-xs-4 film-poster\">\n" +
        "            <a href=\"https://www.themoviedb.org/movie/% FILM - ID %\" target=\"blank\">\n" +
        "              <img src=\"%./img/missing.gif%\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
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
        "        </article>\n" +
        "      </div>\n";

    // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
    // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
    function propComparator(prop) {
        return function (a, b) {
            return ((a[prop] < b[prop] ? -1 : 1) || 0);
        };
    }
    $.getJSON("./db/movies.json", function (data) {
        films = data;
        displayFilms(films);
    });

    document.filtersForm.year.addEventListener("change", function () {

        var year = $("#year").val();
        if (year === "") {
            displayFilms(films);

        } else {
            var filterdFilms = films.filter(function (film) {
                return film.release_date.substr(0, 4) === year;
            });
            $("#collection").empty();
            displayFilms(filterdFilms);
        }
    });
    document.filtersForm.genre.addEventListener("change", function () {

        var genre = $("#genre").val();
        if (genre === "") {
            displayFilms(films);

        } else {
            var filterdFilms = films.filter(function (film) {
                console.log(genre);
                return film.genres.indexOf(genre) > -1;
            });
            $("#collection").empty();
            displayFilms(filterdFilms);
        }
    });

    document.filtersForm.sortBy.addEventListener("change", function () {
        var selected = this.options[this.selectedIndex].text;
        if (selected === "Title descending") {
            films.sort(propComparator('title'));
        } else if (selected === "Title ascending") {
            films.sort(propComparator('title'));
            films.reverse();
        } else if (selected === "Release date descending") {
            films.sort(propComparator('release_date'));
        } else if (selected === "Release date ascending") {
            films.sort(propComparator('release_date'));
            films.reverse();
        } else if (selected === "Rating ascending") {
            films.sort(propComparator('vote_average'));
            films.reverse();
        } else if (selected === "Rating descending") {
            films.sort(propComparator('vote_average'));
        }
        $("#collection").empty();
        displayFilms(films);
    });


    function displayFilms(list) {
        var collection = document.querySelector("#collection");

        list.forEach(function (film) {
            var temp = TEMPLATE.replace(/%FILM-TITLE%/g, film.title)
                .replace(/%FILM-ID-1%/g, film.id)
                .replace(/% FILM - ID %/g, film.id)
                .replace(/%FILM-ID%/g, film.id)
                .replace(/%YEAR%/g, film.release_date.substr(0, 4))
                .replace(/%GENRE%/g, film.genres)
                .replace(/%.\/img\/missing.gif%/g, film.poster_path)
                .replace(/%DESCRIPTION%/g, film.overview)
                .replace(/%RATING%/g, film.vote_average);

            collection.innerHTML += temp;
        });
    }
    document.filtersForm.keywords.addEventListener("keyup", function (event) {
        var value = event.target.value.toLocaleLowerCase();
        if (value.length > 2) {
            var filtered = films.filter(function (film) {
                return (film.title).toLocaleLowerCase().indexOf(value) > -1;
            });
            $("#collection").empty();
            displayFilms(filtered);
        } else {
            displayFilms(films);
        }
    });

})();
